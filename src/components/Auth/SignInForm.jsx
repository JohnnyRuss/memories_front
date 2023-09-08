import { useState } from "react";
import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidation } from "utils/validation/loginValidation";

import { loginUserQuery } from "store/thunks/auth.thunk";

import { Grid, TextField } from "@mui/material";
import FormField from "./FormField";
import FormHeader from "./FormHeader";
import FormDivider from "./FormDivider";
import FormContainer from "./FormContainer";
import PasswordAdornment from "./PasswordAdornment";

import * as MuiStyled from "./styles/styles";
import styles from "./styles/styles.module.css";

export default function SignInForm() {
  const dispatch = useDispatch();

  const [showPasswordAs, setShowPasswordAs] = useState("password");

  const form = useForm({
    resolver: zodResolver(loginValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values) => dispatch(loginUserQuery(values));

  return (
    <FormContainer>
      <FormHeader title="Sign In" />

      <form
        noValidate
        autoComplete="off"
        className={styles["auth-form"]}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <FormField
            control={form.control}
            name="email"
            render={({ baseProps }) => (
              <TextField
                label="Email"
                autoFocus={true}
                {...form.register("email")}
                {...baseProps}
              />
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ baseProps }) => (
              <TextField
                label="Password"
                type={showPasswordAs}
                {...form.register("password")}
                {...baseProps}
                InputProps={{
                  endAdornment: (
                    <PasswordAdornment
                      setShowPasswordAs={setShowPasswordAs}
                      showPasswordAs={showPasswordAs}
                    />
                  ),
                }}
              />
            )}
          />
        </Grid>

        <MuiStyled.Button type="submit" size="large">
          Submit
        </MuiStyled.Button>
      </form>

      <FormDivider
        question="Don't have an account ?"
        answer="Sign Up"
        route="/auth/sign-up"
      />
    </FormContainer>
  );
}
