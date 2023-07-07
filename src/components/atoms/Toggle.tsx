import { Controller } from "react-hook-form";

interface ToggleProps {
  control: any; // todo: fix type
  name: string;
  options: {
    on: { label: string; value: string };
    off: { label: string; value: string };
  };
}

export default function Toggle({
  control,
  name,
  options,
  ...other
}: ToggleProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <div className="relative flex flex-row items-center justify-center overflow-hidden">
          <span className="mr-2 text-sm font-medium text-gray-900">
            {options.off.label}
          </span>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only"
              checked={value === options.on.value}
              onChange={(e) =>
                onChange(
                  e.target.checked ? options.on.value : options.off.value
                )
              }
              {...other}
            />
            <div
              className={`w-11 h-6 relative rounded-full transition-colors ease-in-out duration-200 ${
                value === options.on.value ? "bg-gray-200" : "bg-blue-900"
              }`}
            >
              <div
                className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-300 ease-in-out ${
                  value === options.on.value && "transform translate-x-full"
                }`}
              ></div>
            </div>
          </label>
          <span className="ml-2 text-sm font-medium text-gray-900">
            {options.on.label}
          </span>
        </div>
      )}
    />
  );
}
