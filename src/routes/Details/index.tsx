import React from "react";
import { useParams } from "react-router-dom";

import { ShowDetails } from "../../components/ShowDetails";

interface Params {
  showId?: string;
}

export const Details = () => {
  const { showId = "" } = useParams<Params>();
  return <ShowDetails showId={showId} />;
};
