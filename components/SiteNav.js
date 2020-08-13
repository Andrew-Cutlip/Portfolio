import React  from 'react';
import styled from 'styled-components';
import SLink from './SLink';

const SiteList = styled.ul`
    display : flex;
    width : 100%;
    justify-content : space-evenly;
    flex-direction : row;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    margin-top : 0;
    border-bottom: 1px solid black;
    max-width : 1000px;
`

const SiteBar = styled.nav`
    display : none;
    justify-content: flex-end;
    flex-basis: auto;
    flex-grow: 1;
    align-items: center;

    @media only screen and (min-width:900px) {
        display : flex;
    }
`

const SiteNav = (props) => {
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
            <SiteBar>
                <SiteList>
                    <SLink url="/" name="Home" active={homeActive} />
                    <SLink url="/about" name="About" active={aboutActive} />
                    <SLink url="/portfolio" name="Portfolio" active={portfolioActive} />
                    <SLink url="/skills" name="Skills" active={skillsActive} />
                    <SLink url="/pdfs/resume.pdf" name="Resume(PDF)" active={resumeActive} newTab="true" />
                    <SLink url="/contact" name="Contact" active={contactActive} />
                </SiteList>
            </SiteBar>
    )
}

export default SiteNav;