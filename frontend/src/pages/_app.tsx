import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {useGlobalState} from "@/utils/globalState";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  const [darkMode] = useGlobalState('darkMode');

  useEffect(() => {
  document.documentElement.classList.toggle('dark', darkMode);
}, [darkMode]);

  

  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
