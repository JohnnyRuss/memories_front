import { Link } from "react-router-dom";
import styles from "./styles/styles.module.css";

export default function FormDivider({ question, answer, route }) {
  return (
    <div className={styles["auth-form__anotation-box"]}>
      <span>{question}</span>&nbsp;
      <Link to={route}>{answer}</Link>
      <div data-divider>
        <hr />
        or
        <hr />
      </div>
    </div>
  );
}
