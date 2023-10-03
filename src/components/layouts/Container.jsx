import { Container as MuiContainer } from "@mui/material";

export default function Container({ children, ...props }) {
  return (
    <MuiContainer maxWidth="xl" {...props}>
      {children}
    </MuiContainer>
  );
}
