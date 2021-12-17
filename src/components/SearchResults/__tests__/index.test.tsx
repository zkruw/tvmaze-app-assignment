import React from "react";
import fetchMock from "jest-fetch-mock";
import { render, screen } from "@testing-library/react";
import { SearchResults } from "../index";
import { ThemeProvider } from "@emotion/react";
import { DefaultTheme } from "../../../themes";
import { mockedSearchData } from "../../../misc/MockedData";
import { MemoryRouter } from "react-router";

describe("<SearchResults />", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("displays search results", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockedSearchData));

    render(
      <ThemeProvider theme={DefaultTheme}>
        <SearchResults query="friends" />
      </ThemeProvider>,
      { wrapper: MemoryRouter }
    );

    const titleElement = await screen.findByText(/^Friends/);

    expect(titleElement).toBeInTheDocument();
  });

  it("displays message when no shows are found", async () => {
    fetchMock.mockResponseOnce(JSON.stringify([]));

    render(<SearchResults query="no show" />);

    const messageElement = await screen.findByText(
      /^No shows matching "no show" found/u
    );

    expect(messageElement).toBeInTheDocument();
  });

  it("should display message when something goes wrong", async () => {
    fetchMock.mockRejectOnce(new Error("error"));

    render(<SearchResults query="friends" />);

    const errorElement = await screen.findByText(/^Something went wrong/);

    expect(errorElement).toBeInTheDocument();
  });
});
