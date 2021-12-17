import React from "react";
import { Global, css, useTheme } from "@emotion/react";

export const GlobalStyle = () => {
  const theme = useTheme();

  const globalStyles = css`
    html {
      font-family: "Noto Sans", sans-serif;
    }

    body {
      background: ${theme.color.bg};
      color: ${theme.color.link};
      margin: 0;
      font-size: 16px;
    }

    ,
    a {
      color: ${theme.color.link};
      text-decoration: none;

      &:hover {
        color: ${theme.color.hover};
      }
    }
  `;
  return <Global styles={globalStyles} />;
};
