import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import { useFormContext } from "@/src/hooks/useFormContext";
import Footer from "./Footer";
import "./styles.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { stepTitle, stepSubtitle } = useFormContext();

  return (
    <div className="flex h-screen flex-col lg:flex-row">
      <aside className="lg:w-1/4 md:w-1/3 sm:w-1/2 bg-blue-50 overflow-auto aside-class md:rounded-md  sm:m-4 m-0">
        <Navigation />
      </aside>

      <main className="w-full lg:w-3/4 md:w-2/3 sm:w-1/2 p-4 flex flex-col mx-16 sm:mx-4">
        <div>
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-blue-900">{stepTitle()}</h1>
            <h2 className="text-gray-500 text-lg">{stepSubtitle()}</h2>
          </div>
          <div className="flex-grow bg-white overflow-auto">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
