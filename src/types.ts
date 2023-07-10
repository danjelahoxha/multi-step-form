export type PlanType = "arcade" | "advanced" | "pro";
export type PlanDuration = "monthly" | "yearly";
export type Step = 1 | 2 | 3 | 4 | 5;

export type Addon = {
  id?: string;
  addon_id: number;
  title: string;
  description: string;
  pricePerMonth: number;
  pricePerYear: number;
};

export interface WizardFormData {
  name: string;
  email: string;
  phoneNumber: string;

  planType: PlanType;
  planDuration: PlanDuration;

  addons: Addon[];
}

export interface FormState {
  currentStep: Step;
  data: any; //T;
}

export interface Plan {
  id: PlanType;
  title: string;
  priceMonthly: number;
  priceYearly: number;
  icon: string;
}
