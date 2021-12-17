import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, Name } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={"/"}>
        <Name>TV APP</Name>
      </Link>
    </StyledHeader>
  );
};
