
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

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <img 
          src="https://i.imgur.com/tIzsXkx.png"
          alt=""
          />

          <Spinner 
            name="folding-cube"
            fadeIn="none"
          
          />
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
   
`;

const AppLoadingContents = styled.div`
    text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px
  }
`;

const AppBody = styled.div`
  display: flex;
  
  
`;


