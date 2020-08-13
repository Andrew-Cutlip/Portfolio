import React from 'react';
import styled from 'styled-components';
import SLink from './SLink';

const StyledNav = styled.nav`
    flex-basis: 100%;
    flex-flow : 1;
    align-items : center;
    transition: height ease 20s;
    display: ${props => props.hidden ? "none" : "block"};
    height : ${props => props.hidden ? "0px" : "100%"};

    @media (min-width: 900px) {
        display : none;
    }
`
const StyledNavList = styled.ul`
    display : flex;
    flex-direction : column;
    padding-left : 0;
    list-style : none;
    margin-top : 0;
`


const DropdownNav = (props) => {
    let homeActive = false;
    let aboutActive = false;
    let portfolioActive = false;
    let skillsActive = false;
    let resumeActive = false;
    let contactActive = false;

    if (props.page === "home"){
        homeActive = true;
    }
    if (props.page === "about") {
        aboutActive = true;
    }
    if (props.page === "portfolio") {
        portfolioActive = true;
    }
    if (props.page === "skills") {
        skillsActive = true;
    }
    if (props.page === "resume") {
        resumeActive = true;
    }
    if (props.page === "contact") {
        contactActive = true;
    }

    return (
    <StyledNav hidden={props.hidden}>
        <StyledNavList>
            <SLink url="/" name="Home" active={homeActive} />
            <SLink url="/about" name="About" active={aboutActive} />
            <SLink url="/portfolio" name="Portfolio" active={portfolioActive} />
            <SLink url="/skills" name="Skills" active={skillsActive} />
            <SLink url="/pdfs/resume.pdf" name="Resume(PDF)" active={resumeActive} newTab="true" />
            <SLink url="/contact" name="Contact" active={contactActive} />
        </StyledNavList>
    </StyledNav>
    )
}

export default DropdownNav;