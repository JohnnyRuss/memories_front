import {
  selectPosts,
  selectPostsLoadingStatus,
} from "store/selectors/postSelectors";
import { useSelector } from "react-redux";

import { Grid } from "@mui/material";
import { Spinner } from "components/layouts";

import Post from "./Post/Post";

export default function Posts() {
  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsLoadingStatus);

  return (
    <div>
      <h1>Posts</h1>
      {status.loading && <Spinner />}

      <Grid container>
        {!status.loading &&
          posts?.[0] &&
          posts.map((post) => (
            <Grid item key={post._id}>
              <Post />
            </Grid>
          ))}

        {!status.loading && !posts?.[0] && (
          <p className="no-result__msg">There are no posts yet</p>
        )}
      </Grid>
    </div>
  );
}
