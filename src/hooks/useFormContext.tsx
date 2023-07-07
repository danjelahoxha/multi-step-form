// hooks.ts
import { useContext } from "react";
import { WizardContext } from "../contexts/WizardContext";

export const useFormContext = () => {
  const context = useContext(WizardContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};
