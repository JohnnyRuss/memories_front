import {
  MemoryForm,
  Pagination,
  SearchByTagAndTitle,
} from "components/layouts";
import { Grid } from "@mui/material";

export default function HomeAside({
  onSearch,
  tagsQuery,
  searchQuery,
  pageQuery,
}) {
  return (
    <Grid item md={4} display={{ xs: "none", md: "block" }}>
      <aside style={{ position: "sticky", top: "20px" }}>
        <SearchByTagAndTitle
          onSearch={onSearch}
          tagsQuery={tagsQuery}
          searchQuery={searchQuery}
        />

        <MemoryForm />

        <Pagination page={pageQuery} />
      </aside>
    </Grid>
  );
}
