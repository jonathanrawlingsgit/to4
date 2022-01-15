import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase'

function Header() {
    const [user] = useAuthState(auth);

        return (
        <HeaderContainer>
            <HeaderLeft>
              <HeaderAvatar onClick={() => auth.signOut()} alt={user.displayName} src={user.photoURL}
                
              />
              <AccessTimeIcon />
            </HeaderLeft>

       
            <HeaderSearch>
                <SearchIcon />
                <input placeholder='Search for Scrims!' />
            </HeaderSearch>

      
            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>
        </HeaderContainer>
        )
    }



export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    background: rgb(15,24,54);
background: linear-gradient(306deg, rgba(15,24,54,1) 0%, rgba(191,220,255,1) 170%);
    color: white;
    border-left: 3px solid black;
   
    opacity: 95%;

`

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`

const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: rgb(15,24,54);
    border-color: #9ecaed;
    color: #fff;
    box-shadow: 0 0 7px #9ecaed;
    text-align: center;
    display: flex;
    padding: 0 50px;
    border: 1px white solid;
    

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 30vw;
        outline: 0;
        color: white;
    }
    > ::placeholder {
        color: whitesmoke;
        font-weight: 300;
        opacity: .4;
    }
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


