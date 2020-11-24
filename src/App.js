import React from "react";
import Home from "./containers/Home";
import "./App.css";
import Background from "./asset/Background.svg";
function App() {
  return (
    <div
      className="App"
      style={{
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Home />
    </div>
  );
}

export default App;
