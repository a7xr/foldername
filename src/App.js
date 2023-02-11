import React, { useState } from "react";
import List from "./List";

function App() {
  {
    /* Initial states */
  }
  const [input, setInput] = useState(1);
  const [light, setLight] = useState(true);

  const getItems = () => {
    return [input + 10, input + 100];
  };

  {
    /* Style for changing the theme */
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
