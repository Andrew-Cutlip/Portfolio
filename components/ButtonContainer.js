import styled from 'styled-components';

const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.hor ? "row" : "column" };
    justify-content: space-evenly;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`

const ButtonContainer = (props) => {
    return (
        <StyledButtonContainer hor={props.hor}>
            {props.children}
        </StyledButtonContainer>
    )
}

export default ButtonContainer;