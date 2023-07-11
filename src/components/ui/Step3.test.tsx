import React from "react";
import { render, act, fireEvent, screen } from "@testing-library/react";
import { addonsOptionsData } from "../../constants";
import Step3 from "./Step3";

// Mock the useWizardContext hook
const mockUseWizardContext = jest.fn();
jest.mock("../../hooks/useWizardContext", () => ({
  __esModule: true,
  useWizardContext: () => mockUseWizardContext(),
}));

describe("Step3 component", () => {
  const setData = jest.fn();
  const prevStep = jest.fn();
  const nextStep = jest.fn();

  beforeEach(() => {
    // Reset the mocks before each test
    setData.mockReset();
    prevStep.mockReset();
    nextStep.mockReset();

    // Mock the context value
    mockUseWizardContext.mockReturnValue({
      data: {},
      setData,
      currentStep: 3,
      prevStep,
      nextStep,
      stepTitle: () => "Test Title",
      stepSubtitle: () => "Test Subtitle",
    });
  });

  it("renders the correct title and subtitle", () => {
    render(<Step3 />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("calls setData and nextStep when form is submitted", async () => {
    render(<Step3 />);

    const checkbox = await screen.findByText(addonsOptionsData[0].title);
    console.log(checkbox);
    fireEvent.click(checkbox);

    fireEvent.click(screen.getByText("Next step"));
    await act(() => Promise.resolve());

    expect(setData).toHaveBeenCalled();
    expect(nextStep).toHaveBeenCalled();
  });

  it("calls prevStep when the ' Go back' button is clicked", () => {
    render(<Step3 />);

    fireEvent.click(screen.getByText("Go back"));

    expect(prevStep).toHaveBeenCalled();
  });
});
