import React, { createContext, useReducer } from "react";
import { Step } from "../types";
export interface StepInfo {
  header: string;
  title: string;
  subtitle: string;
  visited?: boolean;
}

export interface FormState<T> {
  currentStep: Step;
  data: T;
  steps: StepInfo[];
}

interface ContextState<T> extends FormState<T> {
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: Step) => void;
  setData: (data: T) => void;
  stepTitle: () => string;
  stepSubtitle: () => string;
}

type Action<T> =
  | { type: "next_step" }
  | { type: "prev_step" }
  | { type: "set_step"; payload: Step }
  | { type: "set_data"; payload: T };

export const WizardContext = createContext<ContextState<any> | undefined>(
  undefined
);

function formReducer<T>(state: FormState<T>, action: Action<T>): FormState<T> {
  switch (action.type) {
    case "next_step":
      const nextStep = (state.currentStep + 1) as Step;

      const updatedMeta = state.steps.map((stepMeta, index) => {
        if (index + 1 === nextStep) {
          return { ...stepMeta, visited: true };
        }
        return stepMeta;
      });
      return {
        ...state,
        currentStep: nextStep,
        steps: updatedMeta,
      };
    case "prev_step":
      return { ...state, currentStep: (state.currentStep - 1) as Step };
    case "set_step":
      return { ...state, currentStep: action.payload };
    case "set_data":
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };
    default:
      return state;
  }
}

interface FormProviderProps<T> {
  children: React.ReactNode;
  steps: StepInfo[];
  initialData: T;
}

export function WizardContextProvider<T>({
  children,
  steps,
  initialData,
}: FormProviderProps<T>) {
  const stepMeta: StepInfo[] = steps.map((step, index) => ({
    ...step,
    visited: index === 0 || !!step.visited,
  }));

  const initialState: FormState<T> = {
    currentStep: 1,
    steps: stepMeta,
    data: initialData,
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const value = {
    ...state,
    nextStep: () => dispatch({ type: "next_step" }),
    setStep: (step: Step) => dispatch({ type: "set_step", payload: step }),
    prevStep: () => dispatch({ type: "prev_step" }),
    setData: (data: T) => dispatch({ type: "set_data", payload: data }),
    stepHeader: () => {
      if (state.steps[state.currentStep - 1]) {
        return state.steps[state.currentStep - 1].header;
      }
      return "";
    },
    stepTitle: () => {
      if (state.steps[state.currentStep - 1]) {
        return state.steps[state.currentStep - 1].title;
      }
      return "";
    },
    stepSubtitle: () => {
      if (state.steps[state.currentStep - 1]) {
        return state.steps[state.currentStep - 1].subtitle;
      }
      return "";
    },
  };

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
}
