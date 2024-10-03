import userEvent from "@testing-library/user-event";
import { BookForm } from "./BookForm";
import { render, screen, waitFor } from "@testing-library/react";
import { debug } from "jest-preview";

const renderPage = () => {
  return render(<BookForm />);
};

describe("BookForm", () => {
  it("should show required inputs on empty form submit", async () => {
    renderPage();

    const user = userEvent.setup();

    await user.click(screen.getByText("Reserve a table"));
    debug();

    await waitFor(() => {
      expect(screen.getAllByText("Required")).toHaveLength(6);
    });
  });
});
