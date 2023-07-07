import Footer from "@/src/components/Footer";
import { useFormContext } from "@/src/hooks/useWizardContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Step1 = () => {
  const schema = z.object({
    name: z.string().min(1, "This field is required"),
    email: z
      .string()
      .min(1, "This field is required")
      .email("Invalid email address"),
    phoneNumber: z.string().min(1, "This field  is required"),
  });
  const { data, currentStep, setData, nextStep, stepTitle, stepSubtitle } =
    useFormContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
    defaultValues: data,
  });

  const onSubmit = (data: any) => {
    setData(data);
    nextStep();
  };
  return (
    <>
      <form id="foo" onSubmit={handleSubmit(onSubmit)} className="card p-6 m-6">
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-blue-900">{stepTitle()}</h1>
          <h2 className="text-gray-500 text-lg">{stepSubtitle()}</h2>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="name" className="font-medium">
              Name
            </label>
            {errors.name && errors.name.message && (
              <p className="text-red-500 text-right text-sm">
                {errors.name.message as string}
              </p>
            )}
          </div>

          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            autoFocus
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="email" className="font-medium">
              Email
            </label>
            {errors.email && errors.email.message && (
              <p className="text-red-500 text-right text-sm">
                {errors.email.message as string}
              </p>
            )}
          </div>

          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-1">
            <label htmlFor="phoneNumber" className="font-medium">
              Phone Number
            </label>
            {errors.phoneNumber && errors.phoneNumber.message && (
              <p className="text-red-500 text-right text-sm">
                {errors.phoneNumber.message as string}
              </p>
            )}
          </div>

          <input
            {...register("phoneNumber")}
            type="tel"
            id="phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
      </form>

      <Footer currentStep={currentStep} nextStep={handleSubmit(onSubmit)} />
    </>
  );
};

export default Step1;
