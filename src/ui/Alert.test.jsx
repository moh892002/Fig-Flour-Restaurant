import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Alert from "./Alert";

describe("Alert", () => {
  it("renders the success message", () => {
    render(<Alert type="success" message="Table confirmed!" />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Table confirmed!")).toBeInTheDocument();
  });

  it("renders the error message", () => {
    render(<Alert type="error" message="Something went wrong." />);
    expect(screen.getByRole("alert")).toBeInTheDocument();
    expect(screen.getByText("Something went wrong.")).toBeInTheDocument();
  });

  it("disappears when the close button is clicked", async () => {
    const user = userEvent.setup();
    render(<Alert type="success" message="Dismiss me" />);
    expect(screen.getByRole("alert")).toBeInTheDocument();

    await user.click(screen.getByLabelText("Close"));
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("applies success styling when type is 'success'", () => {
    render(<Alert type="success" message="OK" />);
    const alert = screen.getByRole("alert");
    expect(alert.className).toContain("text-green-800");
    expect(alert.className).toContain("bg-green-50");
  });

  it("applies error styling when type is 'error'", () => {
    render(<Alert type="error" message="Oops" />);
    const alert = screen.getByRole("alert");
    expect(alert.className).toContain("text-red-800");
    expect(alert.className).toContain("bg-red-50");
  });
});
