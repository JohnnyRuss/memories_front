import * as zod from "zod";
import isBase64Image from "./helpers/isBase64Image";
import strIncludesHash from "./helpers/strIncludesHash";

export const postValidation = zod.object({
  title: zod.string().nonempty(),
  text: zod.string().nonempty(),
  tags: zod.string().refine(strIncludesHash, {
    message:
      "Please start writing tags with '#' and every new tag start with '#' too.",
  }),
  image: zod
    .string()
    .refine(isBase64Image, { message: "Please select valid image file." }),
});
