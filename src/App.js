import NavBar from "./components/navbar";
import React from "react";
import Home from "./components/home";
import About from "./components/about";
import Stack from "./components/stack";


function App() {
  return (
    <div className="font-nanummyeongjo">
      <NavBar/>
      <Home/>
      <About/>
      <Stack/>
    </div>
  );
}

export default App;
