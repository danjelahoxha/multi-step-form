import { useFormContext } from "@/src/hooks/useFormContext";
import { PlanType, PlanDuration } from "@/src/types";
import React from "react";
import Link from "next/link";
import { plansData } from "@/src/constants";

const Summary: React.FC = ({}) => {
  const { planSelection, addonsSelection } = useFormContext();
  const { planType, planDuration } = planSelection;
  const { addons } = addonsSelection;
  const selectedPlan = plansData.find((x) => x.id === planType);
  let total = 0;
  const planPrice =
    (planDuration === "monthly"
      ? selectedPlan?.priceMonthly
      : selectedPlan?.priceYearly) || 0;

  if (planDuration === "monthly") {
    total =
      addons.reduce((acc, addon) => acc + addon.pricePerMonth, 0) + planPrice;
  } else {
    addons.reduce((acc, addon) => acc + addon.pricePerYear, 0) + planPrice;
  }

  const durationFormat = planDuration === "monthly" ? "mo" : "yr";

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
          <Link href="/step2" className="text-sm text-blue-500 underline">
            change
          </Link>
        </div>

        {addons.map((addon, index) => (
          <div key={index} className="flex justify-between py-2">
            <p className="text-gray-500">{addon.title}</p>{" "}
            <p className="text-blue-900">{`+$${addon.pricePerMonth}/mo`}</p>{" "}
          </div>
        ))}
      </div>
      <div className="flex justify-between p-8">
        <p className="text-xl text-gray-500">Total ({planDuration})</p>{" "}
        <p className="text-xl text-purple-700">{`+$${total}/${durationFormat}`}</p>{" "}
      </div>
    </div>
  );
};

export default Summary;
