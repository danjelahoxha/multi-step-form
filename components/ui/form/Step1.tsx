import { FormProvider } from "react-hook-form";

const Step1 = ({ form }: any) => {
  const {
    register,
    formState: { errors },
  } = form;
  return (
    <FormProvider {...form}>
      <form>
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
    </FormProvider>
  );
};

export default Step1;
