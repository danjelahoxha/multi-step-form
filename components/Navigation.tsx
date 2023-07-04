import { useFormContext } from "@/src/hooks/useFormContext";
import React from "react";
import Step from "./atoms/StepItem";

const Navigation: React.FC = () => {
  const { currentStep, setStep } = useFormContext();

  return (
    <div className="p-4 flex flex-row sm:flex-col justify-center sm:justify-center gap-3">
      <Step
        number={1}
        title="Your info"
        isCurrentStep={currentStep === 1}
        onClick={setStep}
      />
      <Step
        number={2}
        title="Select Plan"
        isCurrentStep={currentStep === 2}
        onClick={setStep}
      />
      <Step
        number={3}
        title="Add-ons"
        isCurrentStep={currentStep === 3}
        onClick={setStep}
      />
      <Step
        number={4}
        title="Summary"
        isCurrentStep={currentStep === 4}
        onClick={setStep}
      />
    </div>
  );
};

export default Navigation;
