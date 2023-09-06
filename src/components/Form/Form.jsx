import { useDispatch } from "react-redux";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postValidation } from "utils/validation/postValidation";

import { createPostQuery } from "store/thunks/posts.thunk";

import { Paper, SubmitButton, ClearButton, FormButtonsBox } from "./styles";
import { TextField, Typography } from "@mui/material";
import FileField from "./FileField";
import "./form.css";

export default function Form() {
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(postValidation),
    defaultValues: {
      creator: "",
      title: "",
      message: "",
      tags: "",
      image: "",
    },
  });

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
    dispatch(createPostQuery(values));
  }

  return (
    <Paper>
      <form
        noValidate
        autoComplete="off"
        className="post-form"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Typography variant="h6">Creating a Memory</Typography>

        <TextField
          variant="outlined"
          label="Creator"
          fullWidth
          {...form.register("creator")}
        />

        <TextField
          variant="outlined"
          label="Title"
          fullWidth
          {...form.register("title")}
        />

        <TextField
          variant="outlined"
          label="Message"
          fullWidth
          {...form.register("message")}
        />

        <TextField
          variant="outlined"
          label="Tags"
          fullWidth
          {...form.register("tags")}
        />

        <FormButtonsBox>
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

          <ClearButton
            variant="contained"
            size="small"
            onClick={() => form.reset()}
            fullWidth
          >
            Clear
          </ClearButton>

          <SubmitButton
            variant="contained"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </SubmitButton>
        </FormButtonsBox>
      </form>
    </Paper>
  );
}
