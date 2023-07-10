import React from "react";
import { useWizardContext } from "../src/hooks/useWizardContext";
import Step1 from "@/src/components/ui/Step1";
import Step2 from "@/src/components/ui/Step2";
import Step3 from "@/src/components/ui/Step3";
import Summary from "@/src/components/ui/Summary";
import ThankYou from "@/src/components/ui/ThankYou";

const Home: React.FC = () => {
  const { currentStep } = useWizardContext();

  return (
    <>
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Summary />}
      {currentStep === 5 && <ThankYou />}
    </>
  );
};

export default Home;
