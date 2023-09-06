import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getPostsQuery } from "store/thunks/posts.thunk";

import { Grow, Grid } from "@mui/material";
import Form from "components/Form/Form";
import Posts from "components/Posts/Posts";
import { Container } from "components/layouts";

export default function HomePage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostsQuery());
  }, [dispatch]);

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
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Grow>
  );
}
