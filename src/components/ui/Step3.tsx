import React from "react";
import { useWizardContext } from "../../hooks/useWizardContext";
import { addonsOptionsData } from "../../constants";
import { Addon } from "../../types";
import Footer from "../../components/layout/Footer";
import { useForm } from "react-hook-form";

const Step3: React.FC = () => {
  const {
    data,
    setData,
    currentStep,
    prevStep,
    nextStep,
    stepTitle,
    stepSubtitle,
  } = useWizardContext();

  const { planDuration, addons = [] } = data;

  const { register, handleSubmit } = useForm({
    defaultValues: data,
  });

  const onSubmit = (formData: any) => {
    setData({
      ...data,
      addons: formData.addons,
    });
    nextStep();
  };

  const isMonth = planDuration === "monthly";

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="card p-6 m-6">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-blue-900">{stepTitle()}</h1>
          <h2 className="text-gray-500 text-lg">{stepSubtitle()}</h2>
        </div>

        {addonsOptionsData.map((option: Addon, index: number) => (
          <div key={option.title} className="mb-4">
            <label
              className={`flex items-center flex-row justify-between border p-4 rounded-md ${
                addons.includes(option.title) && "border-purple-700"
              }`}
              htmlFor={`addons[${index}]`}
            >
              <div className="flex items-center">
                <input
                  {...register(`addons[${index}]`)}
                  id={`addons[${index}]`}
                  type="checkbox"
                  name={option.title}
                  className={`mr-2 text-purple-800 ${
                    addons.includes(option.id) ? "bg-checkbox-purple" : ""
                  }`}
                />
                <div>
                  <h3 className="font-semibold">{option.title}</h3>
                  <p className="text-sm">{option.description}</p>
                </div>
              </div>

              <div>
                <p className="text-purple-800">
                  + ${isMonth ? option.pricePerMonth : option.pricePerYear}/
                  {isMonth ? "mo" : "yr"}
                </p>
              </div>
            </label>
          </div>
        ))}
      </form>
      <Footer
        currentStep={currentStep}
        prevStep={prevStep}
        nextStep={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default Step3;
