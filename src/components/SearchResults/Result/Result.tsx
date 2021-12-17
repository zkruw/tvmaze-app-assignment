import React from "react";
import { Show, Image, ShowTitle } from "./styles";

export const Result = ({
  showTitle,
  showImage,
}: {
  showTitle: string;
  showImage: string;
}) => {
  return (
    <Show>
      <Image height="170" src={showImage} />
      <ShowTitle>{showTitle}</ShowTitle>
    </Show>
  );
};
