import React from "react";

export const Messages = ({
  slow,
  loading,
  hasError,
}: {
  slow: boolean;
  loading: boolean;
  hasError: boolean;
}) => {
  if (slow) {
    return (
      <div>Things seems to be going a bit slower than usual, hang on!</div>
    );
  }

  if (hasError) {
    return <div>Something went wrong, please try again.</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return null;
};
