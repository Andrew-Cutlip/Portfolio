import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';


const StyledLink = styled.a`
    display: block;
    padding: .5rem 1rem;
    margin-bottom: -1px;
    border-width: 1px;
    border-style: solid;
    border-right-color : ${props => props.active ? "black" : "transparent"};
    border-left-color : ${props => props.active ? "black" : "transparent"};
    border-top-color : ${props => props.active ? "black" : "transparent"};
    border-bottom-color : "transparent";
    border-radius: .25rem;
    text-decoration : none;
    background-color : ${props => props.active ? "#73e8ff" : "transparent" };
    color: rgba(0,0,0,.5);

    &:hover {
        border: 1px solid black;
        text-decoration: none;
        background-color : #0086c3;
        color: rgba($color: #000000, $alpha: 0.5);
    }
`

const SLink = (props) => {
    let target = null;
    if (props.newTab){
        target = "_blank";
    }
    return (
        <li>
            <Link href={props.url} passHref>
                <StyledLink target={target} active={props.active}>{props.name}</StyledLink>
            </Link>
        </li>
    )
}

export default SLink;