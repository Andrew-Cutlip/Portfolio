import React from 'react';
import styled from 'styled-components';
import MyList from './MyList';

const StyledCard = styled.div`
    display : flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
`
const StyledBody = styled.div`
    flex: 1 1 auto;
    min-height: 1px;
    padding:  ${props => props.flush ? 0 : "1.25rem"};
    background-color : ${props => props.bg};
`

const StyledTitle = styled.h5`
    margin-bottom: .75rem;
    font-weight: 500;
    line-height: 1.2;
    font-size: 1.25rem
`
const StyledSubtitle = styled.h6`
        margin-bottom: 0;
        margin-top: -.375rem;
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.2;
`
const StyledText = styled.p`
        margin-top: 0;
`

const StyledHeader = styled.div`
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: ${props => props.headBg};
    border-bottom: 1px solid rgba(0,0,0,.125);
    display : block;
`


const MyCard = (props) => {
    let title = null;
    let subtitle = null;
    let header = null;
    let items = null;
    let flush = false;
    let body = null;
    let bodyBg = "transparent";
    if (props.title) {
        title = <StyledTitle>{props.title}</StyledTitle>
    }
    if (props.subtitle){
        subtitle = <StyledSubtitle>{props.subtitle}</StyledSubtitle>
    }
    if (props.header){
        header = <StyledHeader headBg={props.headBg}><h3>{props.header}</h3></StyledHeader>
    }
    if (props.items) {
        items = <MyList items={props.items} />
        flush = true;
    }
    if (props.body) {
        body = <StyledText>{props.body}</StyledText>
    }
    if (props.bodyBg){
        bodyBg = props.bodyBg;
    }
    return (
        <StyledCard>
            {header}
            <StyledBody flush={flush} bg={bodyBg} >
            {title}
            {subtitle}
            {items}
            {body}
                <StyledText>{props.text}</StyledText>
            </StyledBody>
        </StyledCard>
    )
}

export default MyCard;