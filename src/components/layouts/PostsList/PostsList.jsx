import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import {
  selectPosts,
  selectPostsLoadingStatus,
} from "store/selectors/postSelectors";

import { Grid } from "@mui/material";
import { Spinner } from "components/layouts";

import { PostCard } from "components/layouts";

export default function PostsList({
  page,
  gridProps = { xs: 12, sm: 6, lg: 4 },
}) {
  const containerRef = useRef(null);

  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsLoadingStatus);

  useEffect(() => {
    if (!containerRef.current) return;
    containerRef.current.scrollIntoView({ top: 0 });
  }, [page]);

  return (
    <div>
      {status.loading && <Spinner />}

      <Grid container spacing={2} ref={containerRef}>
        {!status.loading &&
          posts?.[0] &&
          posts.map((post) => (
            <Grid key={post._id} item {...gridProps}>
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
