import { Grid } from "@mui/material";
import { Pagination } from "components/layouts";

export default function MobilePagination({ pageQuery }) {
  return (
    <Grid item xs={12} display={{ md: "none", xs: "block" }} alignSelf="end">
      <Pagination page={pageQuery} />
    </Grid>
  );
}
