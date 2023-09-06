import * as zod from "zod";
import isBase64Image from "./isBase64Image";

export const postValidation = zod.object({
  creator: zod.string().nonempty(),
  title: zod.string().nonempty(),
  message: zod.string().nonempty(),
  tags: zod.string(),
  image: zod
    .string()
    .refine(isBase64Image, { message: "Please select valid image file." }),
});
