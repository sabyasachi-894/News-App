import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () =>{
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link to="/"  className="navbar-brand">News Monkey</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item" style={{margin: "2px", color: "black"}} ><Link to="/" className="nav-link" >Home </Link></li>
      <li className="nav-item" style={{margin: "2px", color: "black"}}><Link to="/general" className="nav-link" >General </Link></li>
      <li className="nav-item" style={{margin: "2px", color: "black"}}><Link to="/business" className="nav-link" >Business </Link></li>
      <li className="nav-item" style={{margin: "2px", color: "black"}}><Link to="/entertainment" className="nav-link" >Entertainment </Link></li>
      <li className="nav-item" style={{margin: "2px", color: "black"}}><Link to="/health" className="nav-link" >Health </Link></li>
      <li className="nav-item" style={{margin: "2px", color: "black"}}><Link to="/science" className="nav-link" >Science </Link></li>
      <li className="nav-item" style={{margin: "2px", color: "black"}}><Link to="/sports" className="nav-link" >Sports </Link></li>
      <li className="nav-item" style={{margin: "2px", color: "black"}}><Link to="/technology" className="nav-link" >Technology </Link></li>
    </ul>
  </div>
</nav>
  )
}

export default NavBar