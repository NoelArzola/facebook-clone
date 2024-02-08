import React, { ComponentType } from "react";
import "../styles/globals.css";
import { Provider } from "next-auth/client";

interface MyAppProps {
  Component: ComponentType<any>;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
