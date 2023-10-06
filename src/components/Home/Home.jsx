/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { usePostQuery } from "hooks/api";
import { postActions } from "store/reducers/postsSlice";

import { Grow, Grid } from "@mui/material";
import HomeAside from "./HomeAside";
import SearchOnMobile from "./SearchOnMobile";
import CreatePostButton from "./CreatePostButton";
import MobilePagination from "./MobilePagination";
import { Container, PostsList } from "components/layouts";

export default function Home() {
  const dispatch = useDispatch();

  const { onSearch, searchQuery, tagsQuery, pageQuery } = usePostQuery();

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
            minHeight="90vh"
          >
            <SearchOnMobile
              onSearch={onSearch}
              tagsQuery={tagsQuery}
              searchQuery={searchQuery}
            />

            <CreatePostButton />

            <Grid item xs={12} md={8}>
              <PostsList
                page={pageQuery}
                openModalOnUpdate={false}
                skeletonsLength={12}
              />
            </Grid>

            <HomeAside
              onSearch={onSearch}
              pageQuery={pageQuery}
              searchQuery={searchQuery}
              tagsQuery={tagsQuery}
            />

            <MobilePagination />
          </Grid>
        </Container>
      </div>
    </Grow>
  );
}
