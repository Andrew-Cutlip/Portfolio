import styled from 'styled-components';

const StyledButtonList = styled.div`
    display: flex;
    flex-direction: ${props => props.hor ? "row" : "column" };
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .25rem;
`

const ButtonList = (props) => {
    return (
        <StyledButtonList hor={props.hor}>
            {props.children}
        </StyledButtonList>
    )
}

export default ButtonList;