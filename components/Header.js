import React, {useState, useEffect} from 'react';
import SiteNav from './SiteNav';
import styled from 'styled-components';
import MenuButton from './MenuButton';
import DropdownNav from './DropdownNav';

const Brand = styled.img`
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
`

const StyledHeader = styled.header`
    position : sticky;
    top : 0;
    background-color: #29b6f6;
    border-bottom: 1px solid #000;
    display : flex;
    justify-content : space-between;
    padding: .5rem 1rem;
    z-index : 1000;
`

const StyledDropdown = styled.div`
    background-color: #29b6f6;
`

const Header = (props) => {

    const [dropHidden, setDropHidden] = useState(true);

    function switchHidden() {
            if (dropHidden) {
                setDropHidden(false);
            }
            else {
                setDropHidden(true);
            }
    }

    return (
        <StyledDropdown>
        <StyledHeader>
            <Brand src="images/logo.png"
            alt="Cutlip Development logo"
            width="70"
            height="70" />
            <SiteNav page={props.page} />
            <MenuButton onClick={() => switchHidden()} />
        </StyledHeader>
        <DropdownNav hidden={dropHidden} page={props.page} />
        </StyledDropdown>
    )
}

export default Header;