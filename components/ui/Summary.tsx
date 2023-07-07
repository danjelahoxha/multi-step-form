import { useFormContext } from "@/src/hooks/useFormContext";
import { PlanDuration, Addon, WizardFormData, Plan } from "@/src/types";
import React from "react";
import Link from "next/link";
import { plansData } from "@/src/constants";
import Footer from "@/components/Footer";

const getSelectedPlan = (data: WizardFormData, plansData: Plan[]) => {
  const { planType } = data;
  return plansData.find((plan) => plan.id === planType);
};

const getPlanPrice = (selectedPlan: Plan, planDuration: PlanDuration) => {
  const planPriceType =
    planDuration === "monthly" ? "priceMonthly" : "priceYearly";
  return Number(selectedPlan?.[planPriceType]) || 0;
};

const calculateAddonsPrice = (addons: Addon[], planDuration: PlanDuration) => {
  const priceType =
    planDuration === "monthly" ? "pricePerMonth" : "pricePerYear";
  return addons.reduce((total, addon) => total + addon[priceType], 0);
};

const calculateTotals = (data: WizardFormData, plansData: Plan[]) => {
  const { planDuration, addons = [] } = data;

  const selectedPlan = getSelectedPlan(data, plansData);
  const planPrice = getPlanPrice(selectedPlan as Plan, planDuration);
  const addonsPrice = calculateAddonsPrice(addons, planDuration);

  const total = planPrice + addonsPrice;
  const durationFormat = planDuration === "monthly" ? "mo" : "yr";

  return { total, planPrice, durationFormat, selectedPlan };
};

const Summary: React.FC = ({}) => {
  const { currentStep, data, nextStep, prevStep, setStep } = useFormContext();
  const { planDuration, addons } = data;

  const totals = calculateTotals(data, plansData);
  const { selectedPlan, planPrice, durationFormat, total } = totals;

  return (
    <div className="card">
      <div className="border rounded-md p-8 bg-gray-100">
        <div className="border-b border-gray-400 pb-4">
          <div className="flex justify-between">
            <p className="text-xl text-blue-900">
              {selectedPlan?.title} ({planDuration})
            </p>
            <p className="text-lg text-blue-900">{`$${planPrice}/${durationFormat}`}</p>{" "}
          </div>
          <button
            onClick={() => setStep(2)}
            className="text-sm text-blue-500 underline focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            change
          </button>
        </div>

        {addons?.map((addon: Addon, index: number) => (
          <div key={index} className="flex justify-between py-2">
            <p className="text-gray-500">{addon.title}</p>{" "}
            <p className="text-blue-900">{`+$${
              durationFormat === "mo" ? addon.pricePerMonth : addon.pricePerYear
            }/${durationFormat}`}</p>{" "}
          </div>
        ))}
      </div>
      <div className="flex justify-between p-8">
        <p className="text-xl text-gray-500">Total ({planDuration})</p>{" "}
        <p className="text-xl text-purple-700">{`+$${total}/${durationFormat}`}</p>{" "}
      </div>
      <Footer
        currentStep={currentStep}
        confirm={nextStep}
        prevStep={prevStep}
      />
    </div>
  );
};

export default Summary;
