import React  from 'react';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

function SiteNav(props) {

    return (
        <Nav variant="pills" activeKey="/home" as="ul" className="site">
            <Nav.Item as="li">
                <Nav.Link as={NavLink} eventKey="1" to="/home" activeClassName="active" className="tabs">Home</Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
            <Nav.Link as={NavLink} eventKey="2" to="/about" activeClassName="active" className="tabs">About</Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
                <Nav.Link as={NavLink} eventKey="3" to="/portfolio" className="tabs" activeClassName="active">Portfolio</Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
                <Nav.Link as={NavLink} eventKey="4" to="/skills" className="tabs" activeClassName="active">Skills</Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
                <Nav.Link as={NavLink} eventKey="5" to="/resume" className="tabs" activeClassName="active">Resume</Nav.Link>
            </Nav.Item>

            <Nav.Item as="li">
                <Nav.Link as={NavLink} eventKey="6" to="/contact" className="tabs" activeClassName="active">Contact</Nav.Link>
            </Nav.Item>

        </Nav>
    )
}

export default SiteNav;