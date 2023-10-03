/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { postActions } from "store/reducers/postsSlice";

import HomeAside from "./HomeAside";
import { Grow, Grid } from "@mui/material";
import { Container, PostsList } from "components/layouts";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(postActions.resetAllPostsPage());
    };
  }, []);

  return (
    <Grow in={true}>
      <div>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={6} md={8}>
              <PostsList />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <HomeAside />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Grow>
  );
}
