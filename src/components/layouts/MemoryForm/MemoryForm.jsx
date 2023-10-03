import { Link } from "react-router-dom";

import { useCreatePostQuery } from "hooks/api";

import { Controller } from "react-hook-form";

import FileField from "./FileField";
import { Spinner } from "components/layouts";
import { TextField, Typography } from "@mui/material";

import * as MuiStyled from "./MemoryForm.styled";
import styles from "./memoryForm.module.css";

export default function MemoryForm() {
  const { isAuthenticated, status, form, onImageChange, onSubmit } =
    useCreatePostQuery();
  const helperTextProps = { sx: { textAlign: "center" } };

  return (
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
            helperText={error?.message || "Please start writing tags with '#'"}
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
  );
}
