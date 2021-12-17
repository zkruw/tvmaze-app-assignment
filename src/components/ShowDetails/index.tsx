import React from "react";
import { useShow } from "../../hooks/useTVMaze";
import { Messages } from "../Messages";
import parse from "html-react-parser";
import { ShowTitle, Wrapper, Image, Summary, Meta } from "./styles";

export const ShowDetails = ({ showId }: { showId: string }) => {
  const { data, slow, hasError } = useShow(showId);

  if (!data || slow || hasError) {
    return <Messages slow={slow} loading={false} hasError={hasError} />;
  }

  return (
    <>
      {data?.id ? (
        <>
          <ShowTitle>{data.name}</ShowTitle>
          <Wrapper>
            <Image src={data.image?.original} />
            <div>
              <Summary>{parse(data.summary)}</Summary>
              <Meta>Genres: {data.genres.join(", ")}</Meta>

              <Meta>Language: {data.language}</Meta>
            </div>
          </Wrapper>
        </>
      ) : (
        <p>No such show</p>
      )}
    </>
  );
};
