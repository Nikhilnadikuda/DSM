import React from "react";
import Navbar from "./Components/Navbar";
import About from './Components/About'
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home'
import Contest from "./Components/Contest";
import Leaderboard from "./Components/Leaderboard";
import Courses from "./Components/Rules";
import { useState } from "react";
function App() {
  const[player,setPlayer]=useState({
    id:'null',
    mmid:'null',
    name:'',
    profile:'',
    age:'null',
  })
  const handleProfile=(player)=>{
    setPlayer(player);
  }
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={ <Home handleProfile={handleProfile} title={"DSM-Home"}/> } />
        <Route path="rules" element={ <Courses title={"DSM-Rules"}/> } />
        <Route path="contest" element={ <Contest title={"DSM-Contest"}/> } />
        <Route path="leaderboard" element={ <Leaderboard title={"DSM-Leaderboard"}/> } />
        <Route path="about" element={<About player={player} title={"DSM-Player Info"}/>} />
      </Routes>
    </>
  );
}

export default App;
