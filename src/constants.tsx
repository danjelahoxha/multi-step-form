import { Addon, Plan } from "./types";

export const plansData: Plan[] = [
  {
    id: "arcade",
    title: "Arcade",
    priceMonthly: 9.99,
    priceYearly: 99.99,
    icon: "/assets/images/icon-arcade.svg",
  },
  {
    id: "advanced",
    title: "Advanced",
    priceMonthly: 19.99,
    priceYearly: 199.99,
    icon: "/assets/images/icon-advanced.svg",
  },
  {
    id: "pro",
    title: "Pro",
    priceMonthly: 29.99,
    priceYearly: 299.99,
    icon: "/assets/images/icon-pro.svg",
  },
];

export const addonsOptionsData: Addon[] = [
  {
    addon_id: 1,
    title: "Online Service",
    description: "Access to multiple games",
    pricePerMonth: 1,
    pricePerYear: 90,
  },
  {
    addon_id: 2,
    title: "Larger Storage",
    description: "Extra 1TB cloud save",
    pricePerMonth: 2,
    pricePerYear: 120,
  },
  {
    addon_id: 3,
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    pricePerMonth: 2,
    pricePerYear: 150,
  },
];

export const metaTitleSteps = [
  {
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number.",
  },
  {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
  },
  {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
  },
  {
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
  },
];
