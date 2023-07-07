import React from "react";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import { FormProvider } from "../src/contexts/WizardContext";
import "../styles/globals.css";
import { metaTitleSteps } from "../src/constants";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormProvider meta={metaTitleSteps}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FormProvider>
  );
}

export default MyApp;
