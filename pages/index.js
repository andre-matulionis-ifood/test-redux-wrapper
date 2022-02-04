import { useSelector } from "react-redux";
import { fetch } from "../src/fetchReducer";
import { wrapper } from "../src/configRedux";

export default function Home() {
  const { status, data, error } = useSelector(
    (state) => state.fetch
  );
  if (status === "loading" || status === "idle") {
    return <div>Loading...</div>;
  }

  if (status === "rejected") {
    return <div>Error! {error?.message}</div>;
  }

  return (
    <div>
      <textarea
        readOnly
        value={JSON.stringify(data, null, 2)}
        cols={40}
        rows={10}
      />
    </div>
  );
}

Home.getInitialProps = wrapper.getInitialPageProps(
  (store) => async () => {
    const { fetch: fetchState } = store.getState();
    if (fetchState.status === "idle") {
      await store.dispatch(
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      );
    }
  }
);
