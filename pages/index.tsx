import React from "react";
import { useFormContext } from "../src/hooks/useFormContext";
import Step1 from "@/components/ui/form/Step1";
import Step2 from "@/components/ui/form/Step2";
import Step3 from "@/components/ui/form/Step3";
import Summary from "@/components/ui/form/Summary";
import ThankYou from "@/components/ui/form/ThankYou";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Home: React.FC = () => {
  const { currentStep, nextStep, prevStep, userInfo, setUserInfo } =
    useFormContext();

  const schema = z.object({
    name: z.string().min(1, "This field is required"),
    email: z
      .string()
      .min(1, "This field is required")
      .email("Invalid email address"),
    phoneNumber: z.string().min(1, "This field  is required"),
  });
  const methods = useForm({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const {
    // register,
    // handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <div>
      {currentStep === 1 && <Step1 form={methods} />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Summary />}
      {currentStep === 5 && <ThankYou />}
    </div>
  );
};

export default Home;
