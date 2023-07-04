import React, { useContext } from "react";
import { useFormContext } from "@/src/hooks/useFormContext";
import { addonsOptionsData } from "@/src/constants";
import { Addon } from "@/src/types";

const Step3: React.FC = () => {
  const { addonsSelection, planSelection, setAddonsSelection } =
    useFormContext();

  const handleOptionChange = (option: Addon) => {
    const isOptionSelected = addonsSelection.addons.some(
      (selectedOption) => selectedOption.title === option.title
    );

    if (isOptionSelected) {
      setAddonsSelection({
        addons: addonsSelection.addons.filter(
          (selectedOption) => selectedOption.title !== option.title
        ),
      });
    } else {
      setAddonsSelection({
        addons: [...addonsSelection.addons, option],
      });
    }
  };
  const isMonth = planSelection.planDuration === "monthly";
  const isCheckedItem = (option: any) =>
    addonsSelection.addons.some(
      (selectedOption) => selectedOption.title === option.title
    );
  return (
    <div className="container mx-auto">
      <form className="max-w-sm mx-auto">
        {addonsOptionsData.map((option: Addon) => (
          <div key={option.title} className="mb-4">
            <label
              className={`flex items-center flex-row justify-between border p-4 rounded-md ${
                isCheckedItem(option) && "border-purple-700"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isCheckedItem(option)}
                  onChange={() => handleOptionChange(option)}
                  className={`mr-2 text-purple-800 ${
                    isCheckedItem(option) ? "bg-checkbox-purple" : ""
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
    </div>
  );
};

export default Step3;
