
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import styled from "styled-components"
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'
import Login from './components/Login'
import Spinner from 'react-spinkit'
import BgVideo from './components/background.mp4'


function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
        
        <Spinner name="ball-triangle-path" color="white" />

        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="app">
     
        <Router>
          
          {!user ? (
            <Login />
          ) : ( 
            <>
           
          <Header />
          
          
            
            <AppBody>
           
              <Sidebar />
             
                <Routes>
                  <Route exact path="/" element={<Chat />}
                  
                 />
                  
                </Routes>
                
            </AppBody>
            
            </>
          )}
        </Router>
        
        
    </div>
  );
}


export default App;

const AppLoading = styled.div`
   background-image: url('https://i.imgur.com/2K0XoCE.png');
   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(140%);

`;

const AppLoadingContents = styled.div`
    text-align: center;
    margin-top: 400px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AppBody = styled.div`
    display: flex;
`;




