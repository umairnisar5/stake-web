import React, { useState } from "react";
import Home from "./containers/Home";
import Intro from "./containers/Intro";
import "./App.css";
import Background from "./asset/Background.svg";


function App() {
  
  const [goToHome, setGoToHome] = useState(false);

  console.log(goToHome, "goToHome===============");
  const redirectToHome = () => {
    setGoToHome(true);
  };
  const redirectToIntro = () => {
    setGoToHome(false);
  };
  
  return (
   
    <div
    
      className="App"
      style={{
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    > 
    
    
      {/* <Home /> */}
      

      {goToHome ? <Home redirectToIntro={redirectToIntro}/> : <Intro redirectToHome={redirectToHome} />
      }
    </div>
    
  );
}

export default App;
