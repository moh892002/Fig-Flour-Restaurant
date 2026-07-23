import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Reservations from "./Reservations";

describe("Reservations", () => {
  it("renders the heading and description", () => {
    render(<Reservations />);
    expect(screen.getByText("Save your table")).toBeInTheDocument();
    expect(
      screen.getByText(/Tables book up fast on weekends/),
    ).toBeInTheDocument();
  });

  it("renders all three form inputs", () => {
    render(<Reservations />);
    expect(screen.getByLabelText("Date")).toBeInTheDocument();
    expect(screen.getByLabelText("Time")).toBeInTheDocument();
    expect(screen.getByLabelText("Guests")).toBeInTheDocument();
  });

  it("renders the submit button", () => {
    render(<Reservations />);
    expect(
      screen.getByRole("button", { name: "Find a Table" }),
    ).toBeInTheDocument();
  });

  it("does not show the success alert before submission", () => {
    render(<Reservations />);
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("shows the success alert with the correct message after submitting valid data", async () => {
    const user = userEvent.setup();
    render(<Reservations />);

    // Fill in the form
    await user.type(screen.getByLabelText("Date"), "2026-07-12");
    await user.type(screen.getByLabelText("Time"), "18:30");
    await user.type(screen.getByLabelText("Guests"), "2");

    // Submit
    await user.click(screen.getByRole("button", { name: "Find a Table" }));

    // Alert should now be visible
    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();

    // Message should be dynamic and include the submitted values
    expect(alert).toHaveTextContent("Table for 2 guests confirmed");
    expect(alert).toHaveTextContent("6:30 PM");
  });

  it("uses singular 'guest' when guests is 1", async () => {
    const user = userEvent.setup();
    render(<Reservations />);

    await user.type(screen.getByLabelText("Date"), "2026-07-12");
    await user.type(screen.getByLabelText("Time"), "09:00");
    await user.type(screen.getByLabelText("Guests"), "1");

    await user.click(screen.getByRole("button", { name: "Find a Table" }));

    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Table for 1 guest confirmed");
  });

  it("does not show alert when submitting with empty fields", async () => {
    const user = userEvent.setup();
    render(<Reservations />);

    // Click submit without filling anything
    await user.click(screen.getByRole("button", { name: "Find a Table" }));

    // No alert should appear (native validation catches it, but just in case)
    expect(screen.queryByRole("alert")).not.toBeInTheDocument();
  });

  it("can resubmit after closing the alert", async () => {
    const user = userEvent.setup();
    render(<Reservations />);

    // First submission
    await user.type(screen.getByLabelText("Date"), "2026-07-12");
    await user.type(screen.getByLabelText("Time"), "18:30");
    await user.type(screen.getByLabelText("Guests"), "2");
    await user.click(screen.getByRole("button", { name: "Find a Table" }));

    // Close the alert
    await user.click(screen.getByLabelText("Close"));

    // Set new values using fireEvent.change for reliability in jsdom
    const dateInput = screen.getByLabelText("Date");
    const timeInput = screen.getByLabelText("Time");
    const guestsInput = screen.getByLabelText("Guests");

    fireEvent.change(dateInput, { target: { value: "2026-07-14" } });
    fireEvent.change(timeInput, { target: { value: "12:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });

    await user.click(screen.getByRole("button", { name: "Find a Table" }));

    // New alert should appear with updated message
    const alert = screen.getByRole("alert");
    expect(alert).toHaveTextContent("Table for 4 guests confirmed");
  });
});
