import React from "react";
import Layout from "../components/Layout";
import { AppProps } from "next/app";
import { FormProvider } from "../src/contexts/FormContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FormProvider>
  );
}

export default MyApp;
