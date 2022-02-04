import App from "next/app";
import { wrapper } from "../src/configRedux";
import { END } from "redux-saga";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = wrapper.getInitialAppProps(
  (store) => async (context) => {
    const pageProps = (await App.getInitialProps(context))
      .pageProps;

    if (context.ctx.req) {
      await store.dispatch(END);
      await store.__sagaTask.toPromise();
    }

    return { pageProps };
  }
);

export default wrapper.withRedux(MyApp);
