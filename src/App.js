import React from "react";
import "./App.css";
import Name from "./Components/Name";
import Price from "./Components/Price";
import Description from "./Components/Description";
import Image from "./Components/Image";

function App() {
  const firstName = "Skander";
  return (
    <div className="App">
      <Name />
      <Price />
      <Description />
      <Image />
      {firstName ? `hello ${firstName}` : `Hello there`}
    </div>
  );
}

export default App;
