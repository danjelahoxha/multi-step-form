// hooks.ts
import { useContext } from "react";
import { FormContext } from "../contexts/WizardContext";

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
};
