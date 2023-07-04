// FormContext.tsx
import React, { createContext, useReducer } from "react";
import {
  FormState,
  UserInformation,
  PlanSelection,
  Step,
  AddonsSelection,
} from "../types";

// Define the shape of our context state
interface ContextState extends FormState {
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: Step) => void;
  setUserInfo: (info: UserInformation) => void;
  setPlanSelection: (plan: PlanSelection) => void;
  setAddonsSelection: (addons: AddonsSelection) => void;
}

export const FormContext = createContext<ContextState | undefined>(undefined);

//  actions for our reducer
type Action =
  | { type: "next_step" }
  | { type: "prev_step" }
  | { type: "set_step"; payload: Step }
  | { type: "set_user_info"; payload: UserInformation }
  | { type: "set_plan_selection"; payload: PlanSelection }
  | { type: "set_addons_selection"; payload: AddonsSelection };

// form reducer
function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case "next_step":
      return { ...state, currentStep: state.currentStep + 1 };
    case "prev_step":
      return { ...state, currentStep: state.currentStep - 1 };
    case "set_step":
      return { ...state, currentStep: action.payload };
    case "set_user_info":
      return { ...state, userInfo: action.payload };
    case "set_plan_selection":
      return { ...state, planSelection: action.payload };
    case "set_addons_selection":
      return { ...state, addonsSelection: action.payload };
    default:
      return state;
  }
}
const metaTitleSteps = [
  {
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
  },
];

const initialState: FormState = {
  currentStep: 1,
  meta: metaTitleSteps,
  userInfo: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  planSelection: {
    planType: "arcade",
    planDuration: "monthly",
  },
  addonsSelection: {
    addons: [],
  },
};

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const value = {
    ...state,
    nextStep: () => dispatch({ type: "next_step" }),
    setStep: (step: Step) => dispatch({ type: "set_step", payload: step }),
    prevStep: () => dispatch({ type: "prev_step" }),
    setUserInfo: (info: UserInformation) =>
      dispatch({ type: "set_user_info", payload: info }),
    setPlanSelection: (plan: PlanSelection) =>
      dispatch({ type: "set_plan_selection", payload: plan }),
    setAddonsSelection: (addons: AddonsSelection) =>
      dispatch({ type: "set_addons_selection", payload: addons }),
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
}
