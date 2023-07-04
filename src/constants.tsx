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
    title: "Online Service",
    description: "Access to multiple games",
    pricePerMonth: 1,
    pricePerYear: 90,
  },
  {
    title: "Larger Storage",
    description: "Extra 1TB cloud save",
    pricePerMonth: 2,
    pricePerYear: 120,
  },
  {
    title: "Customizable Profile",
    description: "Custom theme on your profile",
    pricePerMonth: 2,
    pricePerYear: 150,
  },
];
