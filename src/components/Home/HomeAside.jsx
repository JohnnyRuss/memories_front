import { usePostQuery } from "hooks/api";

import Search from "./Search";
import { Pagination, MemoryForm } from "components/layouts";

import * as MuiStyled from "./styles/home.styled";

export default function HomeAside() {
  const { onSearch, searchQuery, tagsQuery, pageQuery } = usePostQuery();

  return (
    <aside className="sidebar">
      <Search
        onSearch={onSearch}
        tagsQuery={tagsQuery}
        searchQuery={searchQuery}
      />

      <MemoryForm />

      <MuiStyled.PaginationPaper elevation={6}>
        <Pagination page={pageQuery} />
      </MuiStyled.PaginationPaper>
    </aside>
  );
}
