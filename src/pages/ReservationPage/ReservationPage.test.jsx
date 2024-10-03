import { BrowserRouter, useSubmit } from "react-router-dom";

import { ReservationPage } from "./ReservationPage";
import { render, screen } from "@testing-library/react";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderPage = () => {
  return render(
    <BrowserRouter>
      <ReservationPage />
    </BrowserRouter>
  );
};

describe("ReservationPage", () => {
  it.each([
    "First name",
    "Last name",
    "Email",
    "Phone",
    "Date",
    "Time",
    "Guests",
    "Seating",
    "Additional information",
  ])("should render %s in the page", (value) => {
    renderPage();

    expect(screen.getByText(value)).toBeDefined();
  });
});
