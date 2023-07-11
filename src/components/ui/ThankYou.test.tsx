import React from "react";
import { render, screen } from "@testing-library/react";
import ThankYou from "./ThankYou";

describe("ThankYou component", () => {
  it("renders the correct text", () => {
    render(<ThankYou />);

    expect(screen.getByText("Thank you!")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
      )
    ).toBeInTheDocument();
  });
});
