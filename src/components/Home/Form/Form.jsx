/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  selectEditingPost,
  selectCreatePostLoadingStatus,
} from "store/selectors/postSelectors";
import { selectCurrentUserId } from "store/selectors/authSelectors";

import { useIsAuthenticatedUser } from "hooks/auth";
import { postActions } from "store/reducers/postsSlice";
import { createPostQuery, updatePostQuery } from "store/thunks/posts.thunk";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidation } from "utils/validation/postValidation";

import FileField from "./FileField";
import { Spinner } from "components/layouts";
import { TextField, Typography } from "@mui/material";
import * as MuiStyled from "./styles/styles";
import styles from "./styles/styles.module.css";

export default function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentUserId = useSelector(selectCurrentUserId);
  const status = useSelector(selectCreatePostLoadingStatus);

  const { isAuthenticated } = useIsAuthenticatedUser({
    checkOnMount: true,
    redirectUnAuthorized: false,
  });

  const editingPost = useSelector(selectEditingPost);

  const defaultForm = { title: "", text: "", tags: "", image: "" };
  const form = useForm({
    resolver: zodResolver(postValidation),
    defaultValues: defaultForm,
  });

  const helperTextProps = { sx: { textAlign: "center" } };

  function onImageChange({ event, fieldChangeEvent }) {
    event.preventDefault();

    const imageFile = event.target.files?.[0];

    if (!imageFile || !imageFile.type.includes("image")) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);

    fileReader.onload = async (e) => {
      const imageUrl = e.target.result.toString() || "";
      fieldChangeEvent(imageUrl);
    };
  }

  async function onSubmit(values) {
    if (!isAuthenticated) return navigate("/auth/sign-in");

    if (Object.values(editingPost)[0]) {
      await dispatch(
        updatePostQuery({ params: { postId: editingPost._id }, data: values })
      ).unwrap();

      form.reset(defaultForm);
      dispatch(postActions.clearPostToEdit());
    } else {
      await dispatch(
        createPostQuery({
          ...values,
          tags: values.tags.split("#").filter((part) => part !== ""),
          author: currentUserId,
        })
      ).unwrap();
      form.reset();
    }
  }

  useEffect(() => {
    if (!Object.values(editingPost)[0]) return;

    form.reset({
      title: editingPost.title || "",
      text: editingPost.text || "",
      tags: editingPost.tags || "",
      image: editingPost.image || "",
    });
  }, [editingPost]);

  return (
    <MuiStyled.Paper>
      <form
        noValidate
        autoComplete="off"
        className={styles["post-form"]}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {status.loading && <Spinner type="absolute" />}

        <Typography variant="h6" sx={{ textAlign: "center", width: "100%" }}>
          Share your Memory here
        </Typography>

        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="Title"
              fullWidth
              {...field}
              {...form.register("title")}
              error={error ? true : false}
              helperText={error?.message || ""}
              FormHelperTextProps={helperTextProps}
            />
          )}
        />

        <Controller
          name="text"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="Text"
              fullWidth
              multiline
              rows={4}
              {...field}
              {...form.register("text")}
              error={error ? true : false}
              helperText={error?.message || ""}
              FormHelperTextProps={helperTextProps}
            />
          )}
        />

        <Controller
          name="tags"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="Tags"
              fullWidth
              {...field}
              {...form.register("tags")}
              error={error ? true : false}
              helperText={
                error?.message || "Please start writing tags with '#'"
              }
              FormHelperTextProps={helperTextProps}
            />
          )}
        />

        <div className={styles["post-form__btn-box"]}>
          <Controller
            name="image"
            control={form.control}
            render={({ field }) => (
              <FileField
                value={field.value}
                onChange={(e) =>
                  onImageChange({
                    event: e,
                    fieldChangeEvent: field.onChange,
                  })
                }
              />
            )}
          />

          {isAuthenticated ? (
            <>
              <MuiStyled.ClearButton
                variant="contained"
                size="small"
                onClick={() => form.reset()}
                fullWidth
                disabled={status.loading}
              >
                Clear
              </MuiStyled.ClearButton>

              <MuiStyled.SubmitButton
                variant="contained"
                size="large"
                type="submit"
                fullWidth
                disabled={status.loading}
              >
                Submit
              </MuiStyled.SubmitButton>
            </>
          ) : (
            <p className={styles["no-auth__msg"]}>
              Please&nbsp;
              <Link to="/auth/sign-in">sign in</Link>
              &nbsp;first to share your memory
            </p>
          )}
        </div>
      </form>
    </MuiStyled.Paper>
  );
}
