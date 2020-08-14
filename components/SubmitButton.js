import React from 'react';
import styled from 'styled-components';

const StyledSubmitButton = styled.button`
    background : #73e8ff;
    color: rgba($color: #000000, $alpha: 0.5);
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
    display : inline-block;
    border : 1px solid black;


    &:hover {
        background-color : #29b6f6;
        border : 1px solid black;
        color: white;
    }
`

const SubmitButton = (props) => {
    return (
    <StyledSubmitButton type="submit" onClick={props.onClick}>
        Submit
    </StyledSubmitButton>
    )
}

export default SubmitButton;