import React from "react";
import fetchMock from "jest-fetch-mock";
import { render, screen } from "@testing-library/react";
import { ShowDetails } from "../index";
import { ThemeProvider } from "@emotion/react";
import { DefaultTheme } from "../../../themes";
import { mockedDataFriends } from "../../../misc/MockedData";

describe("<ShowDetails />", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("displays details of show", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockedDataFriends));

    render(
      <ThemeProvider theme={DefaultTheme}>
        <ShowDetails showId="431" />
      </ThemeProvider>
    );

    const languageElement = await screen.findByText(/^Language:/);
    const genresElement = await screen.findByText(/Genres/);

    expect(languageElement).toHaveTextContent("Language: English");
    expect(genresElement).toHaveTextContent("Genres: Comedy, Romance");
  });

  it("displays message when no show is found", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        code: 0,
        message: "Page not found.",
        name: "Not Found",
        status: 404,
      })
    );

    render(<ShowDetails showId="invalid" />);

    const messageElement = await screen.findByText(/^No such show/);

    expect(messageElement).toBeInTheDocument();
  });

  it("displays message on error", async () => {
    fetchMock.mockRejectOnce(new Error("error"));

    render(<ShowDetails showId="1337" />);

    const errorElement = await screen.findByText(/^Something went wrong/);

    expect(errorElement).toBeInTheDocument();
  });
});
