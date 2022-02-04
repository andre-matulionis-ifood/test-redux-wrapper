import { HYDRATE } from "next-redux-wrapper";
import { fetchPokemon } from "./service";

export const FETCH = "FETCH";
export const FULFILL = "FULFILL";
export const REJECT = "REJECT";

export async function Fetch(dispatch, url) {
  dispatch(fetch(url));
  try {
    const data = await fetchPokemon(url);
    dispatch(fulfill(data));
  } catch (error) {
    dispatch(reject(error));
  }
}

export function fetch(url) {
  return {
    type: FETCH,
    payload: { url },
  };
}

export function fulfill(data) {
  return {
    type: FULFILL,
    payload: { data },
  };
}

export function reject(error) {
  return {
    type: REJECT,
    payload: { error },
  };
}

const initialState = {
  status: "idle",
  data: undefined,
  error: undefined,
};

export default function reducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    // case HYDRATE: {
    //   const { fetch } = payload;
    //   if (!["loading", "idle"].includes(fetch.status)) {
    //     return {
    //       ...state,
    //       ...fetch,
    //     };
    //   }
    //   return state;
    // }
    case FETCH: {
      return {
        ...state,
        status: "loading",
      };
    }
    case FULFILL: {
      return {
        ...state,
        status: "fulfilled",
        data: payload.data,
      };
    }
    case REJECT: {
      return {
        ...state,
        status: "rejected",
        error: payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
