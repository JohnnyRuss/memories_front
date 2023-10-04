import { Link } from "react-router-dom";

import { useCreatePostQuery } from "hooks/api";
import { Controller } from "react-hook-form";

import FileField from "./FileField";
import CustomTextarea from "./CustomTextarea";
import { Spinner } from "components/layouts";
import MemoryFormActions from "./MemoryFormActions";
import { TextField, Typography } from "@mui/material";
import styles from "./styles/memoryForm.module.css";

export default function MemoryForm({ onDone }) {
  const {
    isAuthenticated,
    status,
    form,
    onFormHardReset,
    onImageChange,
    onSubmit,
  } = useCreatePostQuery();

  const helperTextProps = { sx: { textAlign: "center" } };

  return (
    <form
      noValidate
      autoComplete="off"
      className={styles["post-form"]}
      onSubmit={form.handleSubmit(onSubmit.bind(this, onDone))}
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
          <CustomTextarea
            label="Text"
            fieldProps={{ ...field, ...form.register("text") }}
            error={error ? true : false}
            helperText={error?.message || ""}
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
          <MemoryFormActions
            onFormHardReset={onFormHardReset}
            loading={status.loading}
          />
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
