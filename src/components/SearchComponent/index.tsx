import React, { useState } from "react";
import { Form, Input, Button } from "./style";

interface SearchComponentInterface {
  initialQuery: string;
  onSubmit: (query: string) => void;
}

const SearchComponent = ({
  initialQuery,
  onSubmit,
}: SearchComponentInterface) => {
  const [query, setQuery] = useState(initialQuery);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(query.trim());
      }}
    >
      <Input
        onChange={(e) => {
          const { value } = e.target;
          setQuery(value);
        }}
        value={query}
        type="search"
      />
      <Button>Search</Button>
    </Form>
  );
};

export default SearchComponent;
