
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './components/Header'
import styled from "styled-components"
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'

function App() {
  return (
    <div className="app">
        <Router>
          
          <Header />
            <AppBody>
              <Sidebar />
                <Routes>
                  <Route exact path="/" element={<Chat />}/>
                    <Route path="/chat" element={<Chat />}/>
          
                </Routes>
            </AppBody>
          
        </Router>
    </div>
  );
}


export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;


