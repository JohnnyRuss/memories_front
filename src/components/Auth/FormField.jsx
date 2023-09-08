import { Controller } from "react-hook-form";

import { Grid } from "@mui/material";

export default function FormField({
  control,
  name,
  render,
  helperText,
  half = false,
}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState: { error } }) =>
          render({
            field,
            baseProps: {
              xs: 12,
              error: error ? true : false,
              helperText: error ? error.message : helperText ? helperText : "",
              fullWidth: true,
              variant: "outlined",
              FormHelperTextProps: { sx: { textAlign: "center" } },
            },
          })
        }
      />
    </Grid>
  );
}
