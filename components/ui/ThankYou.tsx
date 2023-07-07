import React from "react";

const ThankYou: React.FC = ({}) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img
        src="/assets/images/icon-thank-you.svg"
        alt="thank you icon"
        className="mb-4"
        width={"100"}
      />

      <h2 className="text-blue-900 text-3xl">Thank you!</h2>
      <p className="text-gray-500">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default ThankYou;
