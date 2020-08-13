import styled from 'styled-components';

const StyledHead1 = styled.h1`
    background-color : ${props => props.bg};
    border : ${props => props.border ? "1px solid black" : "none"};
    margin-top : .5rem;
    border-radius: .5rem;
`

const StyledH1 = (props) => {
    return (
    <StyledHead1 bg={props.bg} border={props.border}>
        {props.children}
    </StyledHead1>
    )
}

export default StyledH1;

const StyledHead2 = styled.h2`
    background-color : ${props => props.bg};
    border : ${props => props.border ? "1px solid black" : "none"};
    margin-top : .5rem;
    border-radius: .5rem;
`

export const StyledH2 = (props) => {
    return (
    <StyledHead2 bg={props.bg} border={props.border}>
        {props.children}
    </StyledHead2>
    )
}


const StyledHead3 = styled.h3`
    background-color : ${props => props.bg};
    border : ${props => props.border ? "1px solid black" : "none"};
    margin-top : .5rem;
    border-radius: .5rem;
`


export const StyledH3 = (props) => {
    return (
    <StyledHead3 bg={props.bg} border={props.border}>
        {props.children}
    </StyledHead3>
    )
}

const StyledHead4 = styled.h4`
    background-color : ${props => props.bg};
    border : ${props => props.border ? "1px solid black" : "none"};
    margin-top : .5rem;
    border-radius: .5rem;
`

export const StyledH4 = (props) => {
    return (
    <StyledHead4 bg={props.bg} border={props.border}>
        {props.children}
    </StyledHead4>
    )
}

const StyledHead5 = styled.h5`
    background-color : ${props => props.bg};
    border : ${props => props.border ? "1px solid black" : "none"};
    margin-top : .5rem;
    border-radius: .5rem;
`
export const StyledH5 = (props) => {
    return (
    <StyledHead5 bg={props.bg} border={props.border}>
        {props.children}
    </StyledHead5>
    )
}

const StyledHead6 = styled.h6`
    background-color : ${props => props.bg};
    border : ${props => props.border ? "1px solid black" : "none"};
    margin-top : .5rem;
    border-radius: .5rem;
`

export const StyledH6 = (props) => {
    return (
    <StyledHead6 bg={props.bg} border={props.border}>
        {props.children}
    </StyledHead6>
    )
}
