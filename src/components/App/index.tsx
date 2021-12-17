import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "../../routes/Search";
import { Details } from "../../routes/Details";
import { ThemeProvider } from "@emotion/react";
import { DefaultTheme } from "../../themes";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "../Header";
import { Wrapper } from "./styles";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Router>
          <Wrapper>
            <Header />
            <Switch>
              <Route path={"/show/:showId"}>
                <Details />
              </Route>
              <Route path={"/"}>
                <Search />
              </Route>
            </Switch>
          </Wrapper>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
