import styles from "../postDetails.module.css";

export default function PostImage({ image, title }) {
  return (
    <div className={styles.imageSection}>
      <img
        className={styles.media}
        src={
          image ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        alt={title}
      />
    </div>
  );
}
