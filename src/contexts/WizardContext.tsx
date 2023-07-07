import React, { createContext, useReducer } from "react";
import { FormState, Step, Meta } from "../types";

interface ContextState extends FormState {
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: Step) => void;
  setData: (data: any) => void; // todo: Generic type data
  stepTitle: () => string;
  stepSubtitle: () => string;
}

type Action =
  | { type: "next_step" }
  | { type: "prev_step" }
  | { type: "set_step"; payload: Step }
  | { type: "set_data"; payload: { key: string; value: any } };

export const WizardContext = createContext<ContextState | undefined>(undefined);

function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "next_step":
      return { ...state, currentStep: (state.currentStep + 1) as Step };
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

interface FormProviderProps {
  children: React.ReactNode;
  meta: Meta[];
}

export function FormProvider({ children, meta }: FormProviderProps) {
  const initialState: FormState = {
    currentStep: 1,
    meta,
    data: {},
  };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const value = {
    ...state,
    nextStep: () => dispatch({ type: "next_step" }),
    setStep: (step: Step) => dispatch({ type: "set_step", payload: step }),
    prevStep: () => dispatch({ type: "prev_step" }),
    setData: (data: any) => dispatch({ type: "set_data", payload: data }),
    stepTitle: () => {
      if (state.meta[state.currentStep - 1]) {
        return state.meta[state.currentStep - 1].title;
      }
      return "";
    },
    stepSubtitle: () => {
      if (state.meta[state.currentStep - 1]) {
        return state.meta[state.currentStep - 1].subtitle;
      }
      return "";
    },
  };

  return (
    <WizardContext.Provider value={value}>{children}</WizardContext.Provider>
  );
}
