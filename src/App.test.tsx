import { render, screen } from "@testing-library/react";
import App from "./App";

test("mount component", () => {
  render(<App />);
  const titleElement = screen.getByText(/React Typescript Tailwind Starter/i);
  expect(titleElement).toBeInTheDocument();
});
