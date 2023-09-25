import { Pagination as MuiPagination, PaginationItem } from "@mui/material";
import { Link } from "react-router-dom";

export default function Pagination(props) {
  return (
    <MuiPagination
      count={5}
      page={1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${1}`} />
      )}
    />
  );
}
