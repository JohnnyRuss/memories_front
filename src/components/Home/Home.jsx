/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { postActions } from "store/reducers/postsSlice";

import { Grow, Grid, TextField, Button } from "@mui/material";
import { Container, Pagination } from "components/layouts";

import "./home.css";
import "react-tagsinput/react-tagsinput.css";

import TagsInput from "react-tagsinput";

import Posts from "components/Posts/Posts";
import Form from "components/Home/Form/Form";
import * as MuiStyled from "./home.styled";

function useQuery() {
  const { search } = useLocation();

  return new URLSearchParams(search);
}

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("search");
  const tagsQuery = query.get("tags");

  const [search, setSearch] = useState(searchQuery || "");
  const [tags, setTags] = useState(tagsQuery?.split(",") || []);

  function onSearch() {
    if (!search.trim() && !tags[0]) return navigate("/");

    query.delete("page");
    query.append("page", 1);

    if (search) {
      if (searchQuery) query.delete("search");
      query.append("search", search);
    }

    if (tags[0]) {
      if (tagsQuery) query.delete("tags");
      query.append("tags", tags.join(","));
    }

    navigate(`/posts/search?${query.toString()}`);
  }

  useEffect(() => {
    return () => {
      dispatch(postActions.resetPostDetails());
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
              <Posts />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <aside className="sidebar">
                <MuiStyled.AppBar position="static" color="inherit">
                  <TextField
                    name="search"
                    label="Search Memories"
                    variant="outlined"
                    fullWidth
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />

                  <TagsInput value={tags} onChange={(tags) => setTags(tags)} />

                  <Button
                    onClick={onSearch}
                    color="primary"
                    variant="contained"
                  >
                    Search
                  </Button>
                </MuiStyled.AppBar>

                <Form />

                <MuiStyled.PaginationPaper elevation={6}>
                  <Pagination page={page} />
                </MuiStyled.PaginationPaper>
              </aside>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Grow>
  );
}
