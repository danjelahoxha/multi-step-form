import React, { ReactNode } from "react";
import Navigation from "./Navigation";
import { useFormContext } from "@/src/hooks/useFormContext";
import "./styles.css";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row md:m-2 h-screen bg-slate-100 sm:bg-white">
      <aside
        className="lg:w-1/4 md:w-1/3 sm:w-1/2 bg-blue-50 overflow-auto aside-class md:rounded-md"
        style={{ minHeight: "170px" }}
      >
        <Navigation />
      </aside>

      <main className="lg:w-3/4 md:w-2/3 sm:w-1/2 flex flex-col  justify-between sm:min-h-screen h-full p-0 sm:p-20  -mt-20 sm:mt-0">
        {children}
      </main>
    </div>
  );
};

export default Layout;
