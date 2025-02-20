import React from "react";
import '../App.css';
import '../stylesheets/navbar.css';
import {BrowserRouter as Router, Link, Outlet} from 'react-router-dom';

export default function Navbar() {
    //Navbar component
    return(
    <header>
        <h1 id="name">Sebastien's Snacks</h1>
        <nav>
          <Link to={"/"} id="home" cursor="pointer"><h3>Home</h3></Link>
          <Link to={"/aboutme"} id="about" cusror="pointer"><h3>About Me</h3></Link>
        </nav>
    </header>
      )
  }