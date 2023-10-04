import PostCardTags from "./PostCardTags";
import { CardContent } from "@mui/material";
import * as MuiStyled from "./styles/PostCard.styled";

export default function PostCardContent({ tags, title, text }) {
  return (
    <>
      <PostCardTags tags={tags} />

      <MuiStyled.CardContentTitle
        variant="h5"
        component="h2"
        gutterBottom
        sx={{ padding: "0 16px" }}
        title={title}
      >
        {title}
      </MuiStyled.CardContentTitle>

      <CardContent>
        <MuiStyled.CardContentDescription
          variant="body2"
          color="textSecondary"
          component="p"
        >
          {text}
        </MuiStyled.CardContentDescription>
      </CardContent>
    </>
  );
}
