import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    margin-top : auto;
    display : flex;
    width: 100%;
    justify-content: space-between;
    border-top: 1px solid #000;
    flex-shrink: 0;
    background-color: #29b6f6;
`

const Footer =() => {
    return (
    <StyledFooter>
        <nav>
            <a href="#header"><button>Back to Top</button></a>
        </nav>
        <small>Copyright Cutlip Development 2020</small>
    </StyledFooter>
    )
}

export default Footer;