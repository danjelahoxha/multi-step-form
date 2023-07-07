import React from "react";
import { useFormContext } from "@/src/hooks/useFormContext";
import { useForm } from "react-hook-form";
import { plansData } from "@/src/constants";
import Footer from "@/components/Footer";
import Toggle from "@/components/atoms/Toggle";

const Step2: React.FC = () => {
  const { currentStep, data, setData, prevStep, nextStep } = useFormContext();
  const { planType = "advanced", planDuration = "monthly" } = data;

  const { register, handleSubmit, control, watch } = useForm({
    defaultValues: { planType, planDuration },
  });
  const watchedPlanType = watch("planType");

  const onSubmit = (data: any) => {
    setData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container mx-auto">
        <div className="flex justify-center">
          {plansData.map((plan) => (
            <label
              key={plan.id}
              className={`flex flex-col items-center px-4 py-6 mx-2 border rounded-lg ${
                watchedPlanType === plan.id
                  ? "border-blue-500"
                  : "border-gray-300"
              }`}
            >
              <input
                {...register("planType")}
                type="radio"
                value={plan.id}
                className="sr-only"
              />
              <img src={plan.icon} alt={plan.title} className="mb-4" />
              <h3 className="font-bold mb-4 text-blue-900">{plan.title}</h3>
              <p className="mb-4 text-gray-500">
                $
                {data.planDuration === "monthly"
                  ? `$${plan.priceMonthly}/mo`
                  : `$${plan.priceYearly}/yr`}
              </p>
              {data.planDuration !== "monthly" && (
                <p className="text-blue-800">2 months free</p>
              )}
            </label>
          ))}
        </div>
        <div className="flex justify-center mt-4 ">
          <Toggle
            control={control}
            name="planDuration"
            options={{
              on: { label: "Yearly", value: "yearly" },
              off: { label: "Monthly", value: "monthly" },
            }}
          />
        </div>
      </div>
      <div className="flex justify-center mb-4 mt-auto">
        <Footer
          currentStep={currentStep}
          prevStep={prevStep}
          nextStep={handleSubmit(onSubmit)}
        />
      </div>
    </form>
  );
};

export default Step2;
