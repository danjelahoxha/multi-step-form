export type PlanType = "arcade" | "advanced" | "pro";
export type PlanDuration = "monthly" | "yearly";
export type Step = 1 | 2 | 3 | 4 | 5;

type Meta = {
  title: string;
  subtitle: string;
};
export type Addon = {
  title: string;
  description: string;
  pricePerMonth: number;
  pricePerYear: number;
};

export interface UserInformation {
  name: string;
  email: string;
  phoneNumber: string;
}

export interface PlanSelection {
  planType: PlanType;
  planDuration: PlanDuration;
}

export interface AddonsSelection {
  addons: Addon[];
}

export interface FormState {
  currentStep: number;
  userInfo: UserInformation;
  planSelection: PlanSelection;
  addonsSelection: AddonsSelection;
  meta: Meta[];
}

export interface Plan {
  id: PlanType;
  title: string;
  priceMonthly: number;
  priceYearly: number;
  icon: string;
}
