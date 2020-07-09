import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders magbank header", () => {
  const { getByText } = render(<App />);
  const el = getByText(/Magbank/i);
  expect(el).toBeInTheDocument();
});
