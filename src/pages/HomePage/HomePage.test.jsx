import { BrowserRouter } from "react-router-dom";
import { HomePage } from "./HomePage";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const renderPage = () => {
  return render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );
};

describe("HomePage", () => {
  test.each([
    "Book a table",
    "Celebrate your special occasion with us! To ensure we create the perfect atmosphere for your event, please place a reservation.",
    `Let us know the details of your event, including the date, time, and number of guests, so we can make the best arrangements tailored to your needs. Whether it’s an intimate gathering or a grand celebration, we’re here to make your experience unforgettable!`,
  ])("should render %s in the page", (value) => {
    renderPage();

    expect(screen.getByText(value)).toBeDefined();
  });

  it("should redirect the user to the ReservationPage after reserve a table click", async () => {
    renderPage();

    const user = userEvent.setup();

    const button = screen.getByRole("button");

    await user.click(button);

    expect(mockNavigate).toHaveBeenCalledWith("/reservation");
  });
});
