import React from "react";
import { useWizardContext } from "../../hooks/useWizardContext";
import { useForm } from "react-hook-form";
import { plansData } from "../../constants";
import Footer from "../layout/Footer";
import Toggle from "../../components/atoms/Toggle";

const Step2: React.FC = () => {
  const {
    currentStep,
    data,
    setData,
    prevStep,
    nextStep,
    stepTitle,
    stepSubtitle,
  } = useWizardContext();
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
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="card p-6 m-6"
        data-testid="step2-form"
      >
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-blue-900">{stepTitle()}</h1>
          <h2 className="text-gray-500 text-lg">{stepSubtitle()}</h2>
        </div>
        <div className="">
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
                    ? `${plan.priceMonthly}/mo`
                    : `${plan.priceYearly}/yr`}
                </p>
                {data.planDuration !== "monthly" && (
                  <p className="text-blue-800">2 months free</p>
                )}
              </label>
            ))}
          </div>
          <div className="flex justify-center mt-4 bg-slate-100 p-2 max-w-xs mx-auto">
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
      </form>
      <Footer
        currentStep={currentStep}
        prevStep={prevStep}
        nextStep={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default Step2;
