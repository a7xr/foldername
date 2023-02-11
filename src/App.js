import React, { Component, useState } from "react";

// https://www.geeksforgeeks.org/what-is-usestate-how-it-has-been-used-to-validate-input-values/?ref=rp
const App = () => {
  const [name, updateName] = useState("kapil");
  const handleUpdate = () => {
    updateName("Nikhil");
  };
  return (
    <div>
      <button
        style={{ margin: 100 }}
        onClick={() => {
          handleUpdate();
        }}
      >
        change Name
      </button>
      {name}
    </div>
  );
};
export default App;
