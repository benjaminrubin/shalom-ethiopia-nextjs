import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RequestBookingForm from "@/app/request-booking/request-booking-form";

describe("RequestBookingForm", () => {
  test("renders RequestBookingForm component", () => {
    render(<RequestBookingForm />);
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
  });

  test("allows the user to fill out the form", () => {
    render(<RequestBookingForm />);
    userEvent.type(screen.getByLabelText(/full name/i), "John Doe");
    expect(screen.getByLabelText(/full name/i)).toHaveValue("John Doe");
  });
});
