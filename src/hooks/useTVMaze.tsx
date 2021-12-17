import React, { useEffect, useState } from "react";
import { fetcher } from "../utils/fetcher";
import { SearchResult, Show } from "../types/Show";

export const useSearch = (query: string) => {
  const uri = `/search/shows?q=${query}`;

  return useTVMaze<SearchResult[]>(uri);
};

export const useShow = (showId: string) => {
  const uri = `/shows/${showId}`;

  return useTVMaze<Show>(uri);
};

export interface TvMazeInterface<T> {
  data: T | null;
  hasError: boolean;
  slow: boolean;
}

export const useTVMaze = <T,>(uri: string): TvMazeInterface<T | null> => {
  const [data, setData] = useState<T | null>(null);
  const [slow, setSlow] = useState<boolean>(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const url = new URL(uri, "https://api.tvmaze.com/").toString();

    const timer = setTimeout(() => {
      setSlow(true);
    }, 1000);

    fetcher<T>(url)
      .then((data) => {
        setData(data);
      })
      .catch((error) => setHasError(true))
      .finally(() => {
        clearTimeout(timer);
        setSlow(false);
      });

    return () => clearTimeout(timer);
  }, [uri]);

  return { data, slow, hasError };
};
