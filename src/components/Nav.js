import React, {Component} from "react";
import {Route,NavLink,HashRouter} from "react-router-dom";
import {FaClipboardList, FaUserAlt, FaCommentAlt} from "react-icons/fa";
import {RiFileList3Fill} from "react-icons/ri";
import {BiCommentDetail} from "react-icons/bi";
import './Nav.css'
import { Container } from "@material-ui/core";

class Nav extends Component{
    render(){
        return(
            <Container>
                  {/* <h1 className="Judul">Log of Oyazhuryachna</h1>   */}
                  <ul className="MenuAtas">
                    <li><NavLink className="navbar-brand" to="/dashboard">Dashboard</NavLink></li>
                    <li><NavLink to="/admin"><FaUserAlt/> Data Admin</NavLink></li>
                    <li><NavLink to="/layanan"><RiFileList3Fill/> Data Layanan</NavLink></li>
                    <li><NavLink to="/order"><FaClipboardList/> Pesanan</NavLink></li>
                    <li><NavLink to="/kritiksaran"><BiCommentDetail/> Kritik dan Saran</NavLink></li>
                    {/* <li><NavLink to="/login">Login</NavLink></li> */}
                    {/* <li><NavLink to="/contactme">Contact Me</NavLink></li> */}
                  </ul>
                  
            </Container>
        )
    }
}

export default Nav;