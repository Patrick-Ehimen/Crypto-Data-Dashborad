import * as React from "react";

export function useMediaQuery(query: string) {
  // State variable to hold the boolean value of the media query match
  const [value, setValue] = React.useState(false);

  React.useEffect(() => {
    // Function to handle changes in the media query's match state
    function onChange(event: MediaQueryListEvent) {
      setValue(event.matches); // Update state with the new match status
    }

    const result = matchMedia(query); // Create a MediaQueryList object
    result.addEventListener("change", onChange); // Listen for changes in the media query's match state
    setValue(result.matches); // Set initial state based on the current match status

    return () => result.removeEventListener("change", onChange); // Clean up event listener on unmount
  }, [query]); // Re-run effect if query changes

  return value; // Return the current match status
}
