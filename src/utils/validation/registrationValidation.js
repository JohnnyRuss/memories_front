import * as zod from "zod";
import isValidPassword from "./helpers/isValidPassword";

export const registerValidation = zod
  .object({
    firstName: zod.string().min(2).max(20),
    lastName: zod.string().min(2).max(20),
    email: zod.string().email().nonempty(),
    password: zod.string().min(6).refine(isValidPassword, {
      message:
        "Password should contain only latin letters and symbols ( . - _ )",
    }),
    confirmPassword: zod.string().min(3),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Confirm password must match password",
    path: ["confirmPassword"],
  });
