import React, { useEffect, useState } from "react";

// https://www.geeksforgeeks.org/how-to-call-loading-function-with-react-useeffect/?ref=gcse
const App = (props) => {
  const [btnText, updatebtnText] = useState("");

  const loadDataOnlyOnce = () => {
    updatebtnText("Hello kapil");
  };

  // This function will called only once
  useEffect(() => {
    loadDataOnlyOnce();
  }, []);

  return (
    <div style={{ margin: 200 }}>
      <button onClick={() => updatebtnText("Hi")}>{btnText}</button>
    </div>
  );
};

export default App;
