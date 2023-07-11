import { Step } from "@/src/types";
import React from "react";
interface FooterProps {
  currentStep: Step;
  prevStep?: () => void;
  nextStep?: () => void;
  confirm?: () => void;
}

const Footer = ({ currentStep, prevStep, nextStep, confirm }: FooterProps) => {
  if (currentStep === 5) return <></>;

  return (
    <footer className="footer flex justify-between p2">
      {currentStep !== 1 ? (
        <button
          className={`px-4 py-2 font-semibold ${
            currentStep > 1 ? "" : "cursor-not-allowed"
          }`}
          onClick={prevStep}
        >
          Go back
        </button>
      ) : (
        <div />
      )}
      {currentStep < 4 ? (
        <button
          className="px-4 py-2 rounded-md text-white font-semibold bg-blue-900"
          type="submit"
          form="foo"
          onClick={nextStep}
        >
          Next step
        </button>
      ) : (
        <button
          className="px-4 py-2 rounded-md text-white font-semibold bg-violet-500"
          onClick={confirm}
        >
          Confirm
        </button>
      )}
    </footer>
  );
};

export default Footer;
