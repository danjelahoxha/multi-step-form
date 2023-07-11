import { Step } from "@/src/types";
import React from "react";

interface StepProps {
  number: Step;
  title: string;
  isCurrentStep: boolean;
  onClick: (step: Step) => void;
  disabled?: boolean;
}

const StepItem: React.FC<StepProps> = ({
  number,
  title,
  isCurrentStep,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`flex items-center my-4 uppercase ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={() => !disabled && onClick(number)}
      disabled={disabled}
      aria-disabled={disabled}
    >
      <div
        className={`w-10 h-10 flex justify-center items-center rounded-full border-2 ${
          isCurrentStep
            ? "bg-blue-200 text-blue-900"
            : "border-2ray-400 text-gray-200"
        }`}
        aria-current={isCurrentStep}
      >
        {number}
      </div>

      <div className="ml-4  sm:block hidden">
        <div className="text-sm text-gray-400   uppercase">Step {number}</div>
        <div className={"text-gray-200 uppercase"}>{title}</div>
      </div>
    </button>
  );
};

export default StepItem;
