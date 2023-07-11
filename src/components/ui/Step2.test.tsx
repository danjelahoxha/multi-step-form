import { render, fireEvent, screen, act } from "@testing-library/react";
import Step2 from "./Step2";
import { plansData } from "../../constants";

// Mock   useWizardContext
const mockUseWizardContext = jest.fn();
jest.mock("../../hooks/useWizardContext", () => ({
  __esModule: true,
  useWizardContext: () => mockUseWizardContext(),
}));

describe("Step2 component", () => {
  const setData = jest.fn();
  const nextStep = jest.fn();

  beforeEach(() => {
    mockUseWizardContext.mockImplementation(() => ({
      data: {},
      setData,
      currentStep: 2,
      nextStep,
      stepTitle: () => "Test Title",
      stepSubtitle: () => "Test Subtitle",
    }));
  });

  it("renders the correct title and subtitle", () => {
    render(<Step2 />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("renders the correct options", () => {
    render(<Step2 />);

    plansData.forEach((plan) => {
      expect(screen.getByAltText(plan.title)).toBeInTheDocument();
    });

    expect(screen.getByText("Yearly")).toBeInTheDocument();
    expect(screen.getByText("Monthly")).toBeInTheDocument();
  });

  it("calls setData and nextStep when form is submitted", async () => {
    render(<Step2 />);

    fireEvent.click(screen.getByText("Pro"));
    fireEvent.click(screen.getByText("Next step"));
    await act(() => Promise.resolve());

    expect(setData).toHaveBeenCalled();
    expect(nextStep).toHaveBeenCalled();
  });
});
