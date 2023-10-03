import { useLocation } from "react-router-dom";

import Brand from "./Brand";
import Toolbar from "./Toolbar";
import { Container } from "components/layouts";

import * as MuiStyled from "./styles/styles";

export default function Navigation() {
  const { pathname } = useLocation();

  if (pathname.startsWith("/auth")) return <></>;

  const user = null;
  return (
    <Container>
      <MuiStyled.AppBar color="inherit" position="sticky" top="10px">
        <Brand />
        <Toolbar user={user} />
      </MuiStyled.AppBar>
    </Container>
  );
}
