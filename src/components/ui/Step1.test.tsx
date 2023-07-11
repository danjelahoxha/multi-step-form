import { render, fireEvent, act, screen } from "@testing-library/react";
import Step1 from "./Step1";

jest.mock("../../hooks/useWizardContext", () => ({
  useWizardContext: () => ({
    data: {},
    currentStep: 1,
    setData: jest.fn(),
    nextStep: jest.fn(),
    stepTitle: () => "Test Title",
    stepSubtitle: () => "Test Subtitle",
  }),
}));

describe("Step1 component", () => {
  it("displays error messages for invalid form input", async () => {
    render(<Step1 />);

    fireEvent.submit(screen.getByTestId("step1-form"));

    // Let's use act to wait for all promise resolutions - in this case, form validation
    await act(() => Promise.resolve());

    expect(screen.getByText("Name field is required")).toBeInTheDocument();
    expect(screen.getByText("Email field is required")).toBeInTheDocument();
    expect(
      screen.getByText("Phone Number field is required")
    ).toBeInTheDocument();
  });

  it("submits form with valid input", async () => {
    render(<Step1 />);

    fireEvent.input(screen.getByLabelText("Name"), {
      target: { value: "Test User" },
    });

    fireEvent.input(screen.getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });

    fireEvent.input(screen.getByLabelText("Phone Number"), {
      target: { value: "1234567890" },
    });

    fireEvent.submit(screen.getByTestId("step1-form"));

    // Let's use act to wait for all promise resolutions - in this case, form validation
    await act(() => Promise.resolve());

    expect(screen.queryByText("This field is required")).toBeNull();
  });
});
