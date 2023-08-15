import NavBar from "./components/navbar";
import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Stack from "./components/stack";
import Learning from "./components/learning";
import Work from "./components/work";


function App() {
  return (
    <div className="font-nanummyeongjo">
      <NavBar/>
      <Home/>
      <About/>
      <Stack/>
      <Learning/>
      <Work/>
    </div>
  );
}

export default App;
