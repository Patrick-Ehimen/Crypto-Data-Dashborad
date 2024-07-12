import { useState, useEffect } from "react";

export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F
) => {
  // Invoke the store function with the callback and cast the result to type F
  const result = store(callback) as F;

  // Initialize state to hold data of type F
  const [data, setData] = useState<F>();

  // useEffect to update the state whenever 'result' changes
  useEffect(() => {
    setData(result);
  }, [result]);

  // Return the current state
  return data;
};
