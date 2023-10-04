import { useState } from "react";

import TagsInput from "react-tagsinput";
import { TextField, Button } from "@mui/material";

import "react-tagsinput/react-tagsinput.css";
import "./searchByTagAndTitle.css";
import * as MuiStyled from "./SearchByTagAndTitle.styled";

export default function SearchByTagAndTitle({
  searchQuery,
  tagsQuery,
  onSearch,
}) {
  const [search, setSearch] = useState(searchQuery || "");
  const [tags, setTags] = useState(tagsQuery?.split(",") || []);

  return (
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
        onClick={() => onSearch({ search, tags })}
        color="primary"
        variant="contained"
      >
        Search
      </Button>
    </MuiStyled.AppBar>
  );
}
