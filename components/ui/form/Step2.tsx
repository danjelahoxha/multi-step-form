import React from "react";
import { useFormContext } from "@/src/hooks/useFormContext";
import { PlanType } from "@/src/types";
import { plansData } from "@/src/constants";

const Step2: React.FC = () => {
  const { planSelection, setPlanSelection } = useFormContext();

  const handlePlanSelect = (planType: PlanType) => {
    setPlanSelection({ ...planSelection, planType });
  };

  const handleTogglePricing = () => {
    setPlanSelection({
      ...planSelection,
      planDuration:
        planSelection.planDuration === "monthly" ? "yearly" : "monthly",
    });
  };
  const isMonth = planSelection.planDuration === "monthly";

  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        {plansData.map((plan) => (
          <div
            key={plan.id}
            className={`flex flex-col items-center px-4 py-6 mx-2 border rounded-lg ${
              planSelection && planSelection.planType === plan.id
                ? "border-blue-500"
                : "border-gray-300"
            }`}
            onClick={() => handlePlanSelect(plan.id)}
          >
            <img src={plan.icon} alt={plan.title} className="mb-4" />
            <h3 className="font-bold mb-4 text-blue-900">{plan.title}</h3>
            <p className="mb-4 text-gray-500">
              {isMonth ? `$${plan.priceMonthly}/mo` : `$${plan.priceYearly}/yr`}
            </p>
            {!isMonth && <p className="text-blue-800">2 months free</p>}
          </div>
        ))}
      </div>
      <br />
      <div className="flex justify-center mb-4">
        <button
          onClick={handleTogglePricing}
          className={`px-4 py-2 rounded-lg ${
            planSelection.planDuration === "monthly"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={handleTogglePricing}
          className={`px-4 py-2 rounded-lg ml-2 ${
            planSelection.planDuration === "yearly"
              ? "bg-blue-500 text-white"
              : "bg-gray-300"
          }`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};

export default Step2;
