import React from "react";
import { useFormContext } from "@/src/hooks/useFormContext";
import { addonsOptionsData } from "@/src/constants";
import { Addon } from "@/src/types";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";

const Step3: React.FC = () => {
  const { data, setData, currentStep, prevStep, nextStep } = useFormContext();
  const { planDuration } = data;
  const { addons = [] } = data;

  const selectedAddons: boolean[] =
    addonsOptionsData.map((item) =>
      addons.some((x: any) => x.addon_id === item.addon_id)
    ) || [];

  const { register, handleSubmit } = useForm({
    defaultValues: { addons: selectedAddons },
  });

  const onSubmit = (formData: any) => {
    setData({
      ...data,
      addons: addonsOptionsData.filter((item, index) => formData.addons[index]),
    });
    nextStep();
  };

  const isMonth = planDuration === "monthly";

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        {addonsOptionsData.map((option: Addon, index: number) => (
          <div key={option.title} className="mb-4">
            <label
              className={`flex items-center flex-row justify-between border p-4 rounded-md ${
                addons.includes(option.title) && "border-purple-700"
              }`}
            >
              <div className="flex items-center">
                <input
                  {...register(`addons[${index}]`)}
                  type="checkbox"
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
        <div className="flex justify-center mb-4 mt-auto">
          <Footer
            currentStep={currentStep}
            prevStep={prevStep}
            nextStep={handleSubmit(onSubmit)}
          />
        </div>
      </form>
    </div>
  );
};

export default Step3;
