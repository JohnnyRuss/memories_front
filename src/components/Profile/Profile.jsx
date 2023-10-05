import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Container } from "components/layouts";
import ProfileNav from "./ProfileNav";
import ProfileHeader from "./ProfileHeader";
import styles from "./profile.module.css";

const StyledPaper = styled(Paper)(() => ({
  padding: "18px 8px",
  height: "65vh",
  overflowY: "auto",

  "::-webkit-scrollbar": {
    display: "none",
  },
}));

export default function Profile({ children }) {
  return (
    <Container>
      <div className={styles.profileWrapper}>
        <ProfileHeader />

        <ProfileNav />

        <StyledPaper elevation={0}>{children}</StyledPaper>
      </div>
    </Container>
  );
}
