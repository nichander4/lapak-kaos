import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { SnackbarProvider } from "notistack";
import { useEffect } from "react";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { StoreProviders } from "../utils/Store";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <SnackbarProvider anchorOrigin={{ vertical: "top", horizontal: "center" }}>
      <StoreProviders>
        <PayPalScriptProvider deferLoading={true}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PayPalScriptProvider>
      </StoreProviders>
    </SnackbarProvider>
  );
}

export default MyApp;
