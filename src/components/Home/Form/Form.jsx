import { useDispatch } from "react-redux";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidation } from "utils/validation/postValidation";

import { createPostQuery } from "store/thunks/posts.thunk";

import { TextField, Typography } from "@mui/material";
import FileField from "./FileField";
import * as MuiStyled from "./styles/styles";
import styles from "./styles/styles.module.css";

export default function Form() {
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(postValidation),
    defaultValues: {
      creator: "",
      title: "",
      text: "",
      tags: "",
      image: "",
    },
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

  function onSubmit(values) {
    dispatch(
      createPostQuery({
        ...values,
        tags: values.tags.split("#").filter((part) => part !== ""),
      })
    );
  }

  return (
    <MuiStyled.Paper>
      <form
        noValidate
        autoComplete="off"
        className={styles["post-form"]}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Typography variant="h6">Creating a Memory</Typography>

        <Controller
          name="creator"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="Creator"
              fullWidth
              {...form.register("creator")}
              error={error ? true : false}
              helperText={error?.message || ""}
              FormHelperTextProps={helperTextProps}
            />
          )}
        />

        <Controller
          name="title"
          control={form.control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              variant="outlined"
              label="Title"
              fullWidth
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

          <MuiStyled.ClearButton
            variant="contained"
            size="small"
            onClick={() => form.reset()}
            fullWidth
          >
            Clear
          </MuiStyled.ClearButton>

          <MuiStyled.SubmitButton
            variant="contained"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </MuiStyled.SubmitButton>
        </div>
      </form>
    </MuiStyled.Paper>
  );
}
