import styles from "./styles/postCard.module.css";
import * as MuiStyled from "./styles/PostCard.styled";

export default function PostCardTags({ tags }) {
  return (
    <div className={styles.details}>
      <MuiStyled.CardContentTags
        variant="body2"
        component="h2"
        title={tags.map((tag) => `#${tag} `)}
      >
        {tags.map((tag) => `#${tag} `)}
      </MuiStyled.CardContentTags>
    </div>
  );
}
