import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectPagination } from "store/selectors/postSelectors";

import { Pagination as MuiPagination, PaginationItem } from "@mui/material";

export default function Pagination({ page }) {
  const pagination = useSelector(selectPagination);

  const query = new URLSearchParams(window.location.search);
  query.delete("page");

  return (
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
  );
}
