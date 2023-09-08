import { CircularProgress } from "@mui/material";
import styles from "./spinner.module.css";

export default function Spinner({ type = "stand" }) {
  return type === "stand" ? (
    <div className={styles["stand-spinner"]}>
      <CircularProgress />
    </div>
  ) : type === "inline" ? (
    <CircularProgress />
  ) : (
    <></>
  );
}
