import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import SiteNav from './SiteNav';
import logo from '../images/logo.png';
import '../App.scss';

function Header(props) {
    return (
    <Navbar sticky="top" expand="md" collapseOnSelect variant="light" className="header">
        <Navbar.Brand>
            <img
            src={logo}
            alt="Cutlip Development logo"
            width="70"
            height="70">
            </img>
        </Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className="site_nav">
        <SiteNav></SiteNav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default Header;