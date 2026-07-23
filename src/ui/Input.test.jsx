import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  it("renders a label and an input", () => {
    render(
      <Input
        type="text"
        placeholder="Enter name"
        name="Name"
        value=""
        onChange={() => {}}
      />,
    );

    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  it("displays the provided value", () => {
    render(
      <Input
        type="text"
        placeholder="Enter name"
        name="Name"
        value="John"
        onChange={() => {}}
      />,
    );

    expect(screen.getByDisplayValue("John")).toBeInTheDocument();
  });

  it("calls onChange when the user types", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <Input
        type="text"
        placeholder="Enter name"
        name="Name"
        value=""
        onChange={handleChange}
      />,
    );

    const input = screen.getByLabelText("Name");
    await user.type(input, "a");
    expect(handleChange).toHaveBeenCalled();
  });

  it("sets the required attribute when passed", () => {
    render(
      <Input
        type="email"
        placeholder="Email"
        name="Email"
        value=""
        onChange={() => {}}
        required
      />,
    );

    expect(screen.getByLabelText("Email")).toBeRequired();
  });

  it("uses the name as the label text", () => {
    render(
      <Input
        type="date"
        placeholder="Pick a date"
        name="Date"
        value=""
        onChange={() => {}}
      />,
    );

    expect(screen.getByText("Date")).toBeInTheDocument();
  });
});
