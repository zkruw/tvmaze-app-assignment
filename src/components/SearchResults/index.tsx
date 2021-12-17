import React from "react";
import { useSearch } from "../../hooks/useTVMaze";
import { Result } from "./Result/Result";
import { Messages } from "../Messages";
import { Link } from "react-router-dom";

export const SearchResults = ({ query }: { query: string }) => {
  const { data, slow, hasError } = useSearch(query);

  if (!data || hasError || slow) {
    return <Messages slow={slow} hasError={hasError} loading={!data} />;
  }

  return (
    <>
      {data?.length ? (
        <>
          {data.map(({ show }: { show: any }) => (
            <Link key={show.id} to={`/show/${show.id}`}>
              <Result showTitle={show.name} showImage={show.image?.medium} />
            </Link>
          ))}
        </>
      ) : (
        <div>No shows matching "{query}" found.</div>
      )}
    </>
  );
};
