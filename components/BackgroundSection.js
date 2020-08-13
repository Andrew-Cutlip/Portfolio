import styled from 'styled-components';

const StyledBackgroundSection = styled.section`
    margin: 0;
    padding-top: 8px;
    background-color : ${(props) => props.bg};
`

const BackgroundSection = (props) => {
    return (
        <StyledBackgroundSection bg={props.bg}>
            {props.children}
        </StyledBackgroundSection>
    )
}

export default BackgroundSection;