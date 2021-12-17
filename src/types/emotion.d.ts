import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      primary: string;
      link: string;
      hover: string;
      text: string;
      bg: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
