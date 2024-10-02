import { render, screen } from "@testing-library/react";
import { ReservationSuccessfulPage } from "./ReservationSuccessfulPage";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderPage = () => {
  return render(
    <BrowserRouter>
      <ReservationSuccessfulPage />
    </BrowserRouter>
  );
};

describe("ReservationSuccessfulPage", () => {
  it.each([
    "We look forward to meet you.",
    "Your reservation has been confirmed!",
    "Feel free to check and review your reservation details in your profile section.",
  ])("should render %s in the page", (value) => {
    renderPage();

    expect(screen.getByText(value)).toBeDefined();
  });

  it("should redirect the user to the HomePage after go home click", async () => {
    renderPage();

    const user = userEvent.setup();

    const button = screen.getByRole("button");

    await user.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
