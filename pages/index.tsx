import React from "react";
import { useFormContext } from "../src/hooks/useFormContext";
import Step1 from "@/components/ui/Step1";
import Step2 from "@/components/ui/Step2";
import Step3 from "@/components/ui/Step3";
import Summary from "@/components/ui/Summary";
import ThankYou from "@/components/ui/ThankYou";

const Home: React.FC = () => {
  const { currentStep } = useFormContext();

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
