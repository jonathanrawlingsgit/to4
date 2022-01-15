import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { auth, provider } from '../firebase'
import BgVideo from './background.mp4'


function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error) =>
        alert(error.message));
    };

    return (

        <LoginContainer>
            <video autoPlay loop muted>
                <source src={BgVideo} type="video/mp4" />
            </video>
            <LoginInnerContainer>
                
                <h1>Welcome!</h1>
                <h4>Sign in below and start finding teams to scrim!</h4>
               

                <Button onClick={signIn}>
                    Sign In with Google
                </Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login


const LoginContainer = styled.div`
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: grid;
    place-items: center;
    
    > video {
        position: absolute;
        top: 0;
        left: 0;
        filter: brightness(90%);
        width: 100%;
        height: 100%;
        object-fit: cover;
        
    }
`;

const LoginInnerContainer = styled.div`
    position: absolute;
    padding: 200px;
   
    color: #fff;
    text-shadow: 0 0 10px #9ecaed;
    text-align: center;
    background: rgb(15,24,54);
    background: radial-gradient(circle, rgba(15,24,54,1) 2%, rgba(191,220,255,0.49) 100%);
    border-radius: 10px;
    opacity: 90%;
    border: 3px solid #BBDAFF;
    border-color: #9ecaed;
    box-shadow: 0 0 10px #9ecaed;

    > h1 {
        font-size: 48px;
    }

    > h4 {
        font-weight: 200;
        padding-top: 9px;
    }
    
    > button {
        margin-top: 50px;
        text-transform: inherit !important;
        font-weight: 200;
        cursor: pointer;
        border: 2px solid #BBDAFF;
        background: rgb(15,24,54);
        opacity: 2;
        text-shadow: 0 0 10px #9ecaed;
        border-color: #9ecaed;
        color: #fff;
        box-shadow: 0 0 7px #9ecaed;

        :hover {
        background: rgb(15,24,54);
        background: radial-gradient(circle, rgba(15,24,54,1) 0%, rgba(191,220,255,0.49) 0%);
        cursor: pointer;
        border: 2px solid #BBDAFF;
        opacity: 2;
        text-shadow: 0 0 10px #9ecaed;
       
        color: #fff;
        box-shadow: 0 0 7px #9ecaed;
        transition: .5s ease-in;

    }
       
    }
`;