import styled from 'styled-components';

const StyledMenuButton = styled.button`
    display: block;
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    margin : 0;
    border-color: rgba(0,0,0,.1);

    @media only screen and (min-width: 900px) {
        display : none;
    }
`

const StyledBurger = styled.span`
    background-image : url(/images/hamburger-menu.png);
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background-size: 100% 100%;
`

const MenuButton = (props) => {
    return (
        <StyledMenuButton onClick={props.onClick}>
            <StyledBurger />
        </StyledMenuButton>
    )
}

export default MenuButton;