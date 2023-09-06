import { Container } from "components/layouts";
import LogoImage from "assets/logo.png";
import { AppBar, Logo, Typography } from "./styles";

export default function Navigation() {
  return (
    <Container>
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Memories
        </Typography>

        <Logo src={LogoImage} alt="memories" height="60" width="60" />
      </AppBar>
    </Container>
  );
}
