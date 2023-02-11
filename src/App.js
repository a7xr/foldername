import React, { useCallback, useState } from "react";
import List from "./List";

// https://www.geeksforgeeks.org/when-to-use-usecallback-usememo-and-useeffect/?ref=leftbar-rightbar

function App() {
  {
    /* Initial states */
  }
  const [input, setInput] = useState(1);
  const [light, setLight] = useState(true);

  {
    /* useCallback memoizes the getItems() which 
       returns a list of number which is number+10
       and number + 100 */
  }
  const getItems = useCallback(() => {
    return [input + 10, input + 100];
  }, [input]);

  {
    /* style for changing the theme */
  }
  const theme = {
    backgroundColor: light ? "White" : "grey",
    color: light ? "grey" : "white",
  };

  return (
    <>
      <div style={theme}>
        <input
          type="number"
          value={input}
          onChange={(event) => setInput(parseInt(event.target.value))}
        />

        <button onClick={() => setLight((prevLight) => !prevLight)}>
          {light ? "dark mode" : "light mode"}
        </button>
        <List getItems={getItems} />
      </div>
    </>
  );
}

export default App;
