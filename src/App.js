import React, { useState } from "react";

// https://www.geeksforgeeks.org/reactjs-usestate-hook/?ref=gcse
function App() {
  const click = useState("GeeksForGeeks");
  return <h1>Welcome to {click}</h1>;
}

export default App;
