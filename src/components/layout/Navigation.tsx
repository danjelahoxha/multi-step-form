import { useWizardContext } from "@/src/hooks/useWizardContext";
import React from "react";
import Step from "../atoms/StepItem";
import { Step as StepType } from "../../types";

const Navigation: React.FC = () => {
  const { currentStep, setStep, steps } = useWizardContext();

  return (
    <div className="p-4 flex flex-row sm:flex-col justify-center sm:justify-center gap-3">
      {steps.map((step, index) => (
        <Step
          number={(index + 1) as StepType}
          title={step.header}
          isCurrentStep={currentStep === index + 1}
          onClick={setStep}
          disabled={!step.visited}
          key={step.header}
        />
      ))}
    </div>
  );
};

export default Navigation;
