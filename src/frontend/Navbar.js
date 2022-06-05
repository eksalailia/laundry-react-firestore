// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//     return (
//         <nav className="nav-wrapper">
//             <div className="container">
//                 <Link to="/" className="brand-logo" >POLINEMA</Link>
//                 <ul className="right">
//                     <li><Link to="/about">About Us</Link></li>
//                     {/* <li><Link to="/membership">Membership</Link></li>
//                     <li><Link to="/customercare">Customer Care</Link></li>
//                     <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
//                      */}
//                 </ul>
//             </div>
//         </nav>
//     )
// }

// export default Navbar;

import React, {Component} from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import Home from "../frontend/Home";
import About from "../frontend/About";
import Contact from "../frontend/Contact";
import './Navbar.css'
import { Container } from "@material-ui/core";

class Navbar extends Component{
    render(){
        return(
            <Container>
                  {/* <h1 className="Judul">Log of Oyazhuryachna</h1>   */}
                  <ul className="MenuAtas">
                    <li><NavLink className="navbar-brand" to="/">LaundryKita</NavLink></li>
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    {/* <li><NavLink to="/login">Login</NavLink></li> */}
                    <li><NavLink to="/formorder">Form Order</NavLink></li>
                    {/* <li><NavLink to="/contactme">Contact Me</NavLink></li> */}
                  </ul>
            </Container>
        )
    }
}

export default Navbar;