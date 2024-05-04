import "../styles/reset.css";
import "../styles/globals.css";
import MainLayout from "../Components/MainLayout/MainLayout";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
