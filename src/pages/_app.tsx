import ScrollProgress from "@/atoms/ScrollProgress";
import ClientOnly from "@/components/ClientOnly/ClientOnly";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import { Provider } from "react-redux";
import { rootReducer } from "../redux/reducers/root";
import dynamic from "next/dynamic";
import "./globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const CustomScript = dynamic(() => import("@/atoms/CustomScript"), {
    ssr: false,
  });

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <Provider store={rootReducer}>
        <ClientOnly>
          <ScrollProgress />
          <NextNProgress />
          <Component {...pageProps} />

          <CustomScript />
        </ClientOnly>
      </Provider>
    </>
  );
}
