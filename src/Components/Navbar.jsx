import React, {useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo1 from '../assets/logo1.png'
import './Navbar.css'
const Navbar = () => {
  const[act,setAct]=useState("")
  const location=useLocation();
  useEffect(()=>{
    setAct(location.pathname)
    console.log(location)
  },[location])
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:'sticky',top:'0',zIndex:'100'}}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      <div className="d-flex justify-content-center align-items-center">
      <img src={logo1} alt="" className='logo' style={{marginTop:'10px',width:'58px',height:'49px',borderRadius:'10px',marginLeft:'10px'}}/>
      <p style={{textShadow:'2px 2px 8px #FF0000'}} className="my-2 ms-2 p-2 fw-bold display-6">D💲♏</p>
      </div>
    
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" style={act==="/"?{color:"white"}:{}} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={act==="/rules"?{color:"white"}:{}} to="/rules">Rules</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={act==="/contest"?{color:"white"}:{}} to="/contest">Contest</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={act==="/leaderboard"?{color:"white"}:{}} to="/leaderboard">Leaderboard</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar