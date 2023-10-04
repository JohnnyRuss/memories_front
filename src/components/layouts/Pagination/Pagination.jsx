import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPagination } from "store/selectors/postSelectors";

import {
  Paper,
  PaginationItem,
  Pagination as MuiPagination,
} from "@mui/material";

export default function Pagination({ page }) {
  const pagination = useSelector(selectPagination);

  const query = new URLSearchParams(window.location.search);
  query.delete("page");

  return (
    <Paper
      elevation={6}
      sx={{
        display: "flex",
        padding: "10px",
        marginTop: "20px",
        justifyContent: "center",
      }}
    >
      <MuiPagination
        count={+pagination.numberOfPages}
        page={+pagination.currentPage}
        variant="outlined"
        color="primary"
        renderItem={(item) => (
          <PaginationItem
            {...item}
            component={Link}
            to={`/posts?page=${item.page}${query ? `&${query}` : ""}`}
          />
        )}
      />
    </Paper>
  );
}
