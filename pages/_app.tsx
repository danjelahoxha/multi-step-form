import React from "react";
import Layout from "../src/components/Layout";
import { AppProps } from "next/app";
import { WizardContextProvider } from "../src/contexts/WizardContext";
import "../styles/globals.css";
import { metaTitleSteps } from "../src/constants";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WizardContextProvider steps={metaTitleSteps} initialData={{}}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WizardContextProvider>
  );
}

export default MyApp;
