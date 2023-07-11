import { render, fireEvent } from "@testing-library/react";
import StepComponent from "./StepItem";

describe("Step component", () => {
  it("renders the correct step number and title", () => {
    const { getByText } = render(
      <StepComponent
        number={1}
        title="Test step"
        isCurrentStep={false}
        onClick={() => {}}
      />
    );

    expect(getByText("Step 1")).toBeInTheDocument();
    expect(getByText("Test step")).toBeInTheDocument();
  });

  it("calls onClick with the correct step number when clicked", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <StepComponent
        number={1}
        title="Test step"
        isCurrentStep={false}
        onClick={handleClick}
      />
    );

    fireEvent.click(getByText("Step 1"));
    expect(handleClick).toHaveBeenCalledWith(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <StepComponent
        number={1}
        title="Test step"
        isCurrentStep={false}
        onClick={handleClick}
        disabled={true}
      />
    );

    fireEvent.click(getByText("Test step"));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
