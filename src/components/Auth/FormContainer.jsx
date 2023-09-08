import * as MuiStyled from "./styles/styles";

export default function FormContainer({ children }) {
  return (
    <MuiStyled.Container component="main">
      <MuiStyled.Paper elevation={6}>{children}</MuiStyled.Paper>
    </MuiStyled.Container>
  );
}
