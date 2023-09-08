import * as zod from "zod";
import isValidPassword from "./helpers/isValidPassword";

export const loginValidation = zod
  .object({
    email: zod.string().email().nonempty(),
    password: zod.string().nonempty().min(6).refine(isValidPassword, {
      message:
        "Password should contain only latin letters and symbols ( . - _ )",
    }),
  })
  .required()
  .strict();
