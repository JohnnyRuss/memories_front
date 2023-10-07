import { IMAGE_PLACEHOLDER } from "config/config";
import styles from "../../postDetails.module.css";

export default function PostImage({ image, title }) {
  return (
    <figure className={styles.imageSection}>
      <img
        className={styles.media}
        src={image || IMAGE_PLACEHOLDER}
        alt={title}
      />
    </figure>
  );
}
