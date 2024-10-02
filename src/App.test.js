import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const renderPage = () => {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
};

describe("App", () => {
  test("renders learn react link", () => {
    renderPage();

    expect(screen.getByText("Little Lemon")).toBeInTheDocument();
    expect(screen.getByText("2024 © Copyright")).toBeInTheDocument();
  });
});
