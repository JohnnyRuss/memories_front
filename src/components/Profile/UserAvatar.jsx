import { Avatar } from "components/layouts";
import styles from "./profile.module.css";

export default function UserAvatar() {
  return (
    <figure className={styles.profileHeaderFig}>
      <Avatar username="john russ" />

      <figcaption className={styles.profileHeaderFigCaption}>
        <strong className={styles.profileHeaderFigName}>
          <span>John Russ</span>
        </strong>
        <span className={styles.profileHeaderFigEmail}>russ@io.com</span>
      </figcaption>
    </figure>
  );
}
