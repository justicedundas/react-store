import { useState, useEffect, useReducer } from "react";

function fetchReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        isLoading: true,
        err: null,
      };
    case "FETCH_SUCCESS":
      return {
        isLoading: false,
        err: null,
      };
    case "FETCH_FAILURE":
      return {
        isLoading: false,
        err: action.payload.err,
      };
    default:
      throw new Error("Unexpected action type");
  }
}

const initialState = {
  isLoading: false,
  err: null,
};

function useFetch(url) {
  const [data, setData] = useState(null);
  const [fetchState, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    let didCancel = false;

    async function fetchData() {
      try {
        dispatch({ type: "FETCH_INIT" });
        const res = await fetch(url);
        const data = await res.json();
        if (!didCancel) {
          setData(data);
          dispatch({ type: "FETCH_SUCCESS" });
        }
      } catch (err) {
        if (!didCancel) {
          dispatch({ type: "FETCH_FAILURE", payload: { err } });
        }
      }
    }

    fetchData();

    return () => {
      didCancel = true;
    };
  }, [setData, dispatch, url]);

  // Here we return the states that we want to expose to our App component
  return { data, ...fetchState };
}

export default useFetch;
