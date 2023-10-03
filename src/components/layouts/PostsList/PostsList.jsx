import {
  selectPosts,
  selectPostsLoadingStatus,
} from "store/selectors/postSelectors";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";
import { Spinner } from "components/layouts";

import { PostCard } from "components/layouts";

export default function Posts() {
  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsLoadingStatus);

  return (
    <div>
      {status.loading && <Spinner />}

      <Grid container spacing={2}>
        {!status.loading &&
          posts?.[0] &&
          posts.map((post) => (
            <Grid key={post._id} item xs={12} sm={4}>
              <PostCard post={post} />
            </Grid>
          ))}

        {!status.loading && !posts?.[0] && (
          <p className="no-result__msg">There are no posts yet</p>
        )}
      </Grid>
    </div>
  );
}
