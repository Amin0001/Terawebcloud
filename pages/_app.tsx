import "../styles/globals.css";
import type { AppProps } from "next/app";
// pages/_app.js
import "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
