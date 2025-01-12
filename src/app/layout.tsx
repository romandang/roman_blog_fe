import CustomScript from "@/atoms/CustomScript";
import Head from "next/head";
import Global from "./global";
import "./globals.css";
import StoreProvider from "./StoreProvider";

export default function MyApp({ children }) {
  return (
    <html>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body>
        <StoreProvider>
          <Global>{children}</Global>
        </StoreProvider>
      </body>
    </html>
  );
}
