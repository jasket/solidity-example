import React from "react";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { App } from "../index";

afterEach(cleanup);

test("renders learn react link", async () => {
  render(<App />);
  const linkElement = await waitFor(() => screen.findByText(/login/i));
  expect(linkElement).toBeInTheDocument();
});
