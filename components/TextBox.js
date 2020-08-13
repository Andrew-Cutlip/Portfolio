import styled from 'styled-components';

const StyledTextBox = styled.div`
    padding : 1rem;
    margin-right: auto;
    margin-left: auto;
    margin-bottom : .5rem;
    text-align : center;
    border : 1px solid black;
    border-radius : .5rem;
    background-color : ${(props) => props.bg};

    @media only screen and (min-width: 600px) {
        width: 90%;
    }

    @media only screen and (min-width: 900px) {
        width: 80%;
    }

    @media only screen and (min-width: 1200px) {
        width : 75%;
        max-width: 900px;
    }
`

const StyledText = styled.p`
    text-align: left;
    border : ${props => props.border ? "1px solid black" : "none" };
    background-color : ${props => props.bodyBg};
    padding : .5rem;
    font-size : large;
`

const StyledTitle = styled.h1`
    background-color : #29b6f6;
    border-radius: .5rem;
    border : 1px solid black;
    @media only screen and (min-width: 600px) {
        margin-left : 25%;
        margin-right : 25%;
    }
`

const TextBox = (props) => {
    let txt = null;
    let title = null;
    let p = null;
    if (props.text) {
        txt = props.text.map((t, index) => {
           return <StyledText key={index}>{t}</StyledText>
        })
    }
    if (props.title) {
        title = <StyledTitle>{props.title}</StyledTitle>
    }
    if (props.p) {
        p = <StyledText border={props.border} bodyBg={props.bodyBg} >{props.p}</StyledText>
    }
    return (
        <StyledTextBox bg={props.bg}>
            {title}
            {p}
            {txt}
        </StyledTextBox>
    )
}

export default TextBox;