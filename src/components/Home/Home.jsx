import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { searchPosts } from "store/thunks/posts.thunk";

import { Grow, Grid, TextField, Button } from "@mui/material";
import { Container, Pagination } from "components/layouts";

import TagsInput from "react-tagsinput";
import "react-tagsinput/react-tagsinput.css";
import "./home.css";

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

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);

  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("search");
  const tagsQuery = query.get("tags");

  function onSearch() {
    if (!search.trim() && !tags[0]) return navigate("/");

    if (search) {
      if (searchQuery) query.delete("search");
      query.append("search", search);
    }

    if (tags[0]) {
      if (tagsQuery) query.delete("tags");
      query.append("tags", tags.join(","));
    }

    dispatch(searchPosts({ search, tags: tags.join(",") }));

    navigate(`/posts/search?${query.toString()}`);
  }

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
            <Grid item xs={12} sm={6} md={4} position="sticky" top="0">
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

                <Button onClick={onSearch} color="primary" variant="contained">
                  Search
                </Button>
              </MuiStyled.AppBar>

              <Form />

              <MuiStyled.PaginationPaper elevation={6}>
                <Pagination />
              </MuiStyled.PaginationPaper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Grow>
  );
}
