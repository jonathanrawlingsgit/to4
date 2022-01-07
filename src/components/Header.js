import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

    function Header() {
        return (
        <HeaderContainer>
            {/* Left Side */}
            <HeaderLeft>
              <HeaderAvatar />
              <AccessTimeIcon />
            </HeaderLeft>

            {/* Search Bar */}
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='Search for Scrims' />
            </HeaderSearch>

            {/* Right Side */}
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
        )
    }



export default Header;

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: #054682;
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: lightgreen;
    border: 1px lightgreen solid;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
`;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background-color: var(--to4-color);
    color: white;
    `;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;

> .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
}
`;

const HeaderAvatar = styled(AccountCircleIcon)`
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;


