import styled from 'styled-components';

const StyledSectionButton = styled.a`
    background : #73e8ff;
    color: black;
    padding: .75rem 1.25rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    display : block;
    text-decoration: none;
    width: 100%;
    text-align: inherit;
    margin : .25rem .5rem;


    &:hover {
        background-color : #29b6f6;
        border : 1px solid black;
        color: white;
    }
`

export default StyledSectionButton;