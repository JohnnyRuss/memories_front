import { Grid } from "@mui/material";
import { SearchByTagAndTitle } from "components/layouts";

export default function SearchOnMobile({ onSearch, tagsQuery, searchQuery }) {
  return (
    <Grid item xs={12} display={{ md: "none", xs: "block" }} alignSelf="start">
      <SearchByTagAndTitle
        onSearch={onSearch}
        tagsQuery={tagsQuery}
        searchQuery={searchQuery}
      />
    </Grid>
  );
}
