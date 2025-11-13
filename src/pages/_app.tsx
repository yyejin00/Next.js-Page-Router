import GlobalLyout from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

//프로그래매틱한 이동방식
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLyout>
      <Component {...pageProps} />
    </GlobalLyout>
  );
}
