import React, { useState } from "react";
import SearchComponent from "../../components/SearchComponent";
import { useQuery } from "../../hooks/useQuery";
import { SearchResults } from "../../components/SearchResults";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();
  const query = useQuery();

  const initialQuery = query.get("query") ?? "";

  const [searchQuery, setSearchQuery] = useState(initialQuery);

  return (
    <>
      <SearchComponent
        initialQuery={initialQuery}
        onSubmit={(value) => {
          setSearchQuery(value);
          history.push(`/?query=${value}`);
        }}
      />
      {searchQuery && <SearchResults query={searchQuery} />}
    </>
  );
};

export default Search;
