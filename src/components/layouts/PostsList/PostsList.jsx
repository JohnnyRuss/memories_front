import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

import {
  selectPosts,
  selectPostsLoadingStatus,
} from "store/selectors/postSelectors";

import { Grid } from "@mui/material";
import { PostCard, PostCardSkeleton } from "components/layouts";

export default function PostsList({
  page,
  gridProps = { xs: 12, sm: 6, lg: 4 },
  openModalOnUpdate,
  showActionButtons,
  skeletonsLength = 8,
}) {
  const containerRef = useRef(null);

  const posts = useSelector(selectPosts);
  const status = useSelector(selectPostsLoadingStatus);

  useEffect(() => {
    if (!containerRef.current || !page) return;
    containerRef.current.scrollIntoView({ top: 0, left: 0 });
  }, [page]);

  return (
    <Grid
      container
      ref={containerRef}
      bgcolor="#fff"
      spacing={3}
      sx={{
        paddingRight: "24px",
        paddingBottom: "24px",
        margin: 0,
        width: "100%",
        // gap: "24px",
        borderRadius: "5px",
      }}
    >
      {!status.loading
        ? posts.map((post) => (
            <Grid key={post._id} item {...gridProps}>
              <PostCard
                post={post}
                openModalOnUpdate={openModalOnUpdate}
                showActionButtons={showActionButtons}
              />
            </Grid>
          ))
        : Array.from(new Array(skeletonsLength)).map(() => (
            <Grid key={nanoid()} item {...gridProps}>
              <PostCardSkeleton />
            </Grid>
          ))}

      {!status.loading && !posts?.[0] && (
        <p className="no-result__msg">There are no posts yet</p>
      )}
    </Grid>
  );
}
