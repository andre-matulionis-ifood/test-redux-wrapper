import App from "next/app";
import { wrapper } from "../src/configRedux";
import { END } from "redux-saga";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
