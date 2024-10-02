import { BrowserRouter, useSubmit } from "react-router-dom";
import { debug } from "jest-preview";
import { ReservationPage } from "./ReservationPage";
import { queryByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const mockSubmit = jest.fn();

jest.mock("../../hooks/useSubmit", () => ({
  useSubmit: () => ({
    submit: mockSubmit,
  }),
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
