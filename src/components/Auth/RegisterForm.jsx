import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerValidation } from "utils/validation/registrationValidation";

import { registerUserQuery } from "store/thunks/auth.thunk";

import { Grid, TextField } from "@mui/material";
import FormField from "./FormField";
import FormHeader from "./FormHeader";
import FormDivider from "./FormDivider";
import FormContainer from "./FormContainer";
import PasswordAdornment from "./PasswordAdornment";

import * as MuiStyled from "./styles/styles";
import styles from "./styles/styles.module.css";

export default function RegisterForm() {
  const dispatch = useDispatch();

  const [showPasswordAs, setShowPasswordAs] = useState("password");

  const form = useForm({
    resolver: zodResolver(registerValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values) => dispatch(registerUserQuery(values));

  return (
    <FormContainer>
      <FormHeader title="Sign Up" />

      <form
        noValidate
        autoComplete="off"
        className={styles["auth-form"]}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <FormField
            control={form.control}
            name="firstName"
            half={true}
            render={({ baseProps }) => (
              <TextField
                label="First Name"
                autoFocus={true}
                {...form.register("firstName")}
                {...baseProps}
              />
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            half={true}
            render={({ baseProps }) => (
              <TextField
                label="Last Name"
                {...form.register("lastName")}
                {...baseProps}
              />
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ baseProps }) => (
              <TextField
                label="Email"
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

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ baseProps }) => (
              <TextField
                label="Confirm Password"
                type={showPasswordAs}
                {...form.register("confirmPassword")}
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
          Sign Up
        </MuiStyled.Button>
      </form>

      <FormDivider
        question="Have an account ?"
        answer="Sign In"
        route="/auth/sign-in"
      />
    </FormContainer>
  );
}
