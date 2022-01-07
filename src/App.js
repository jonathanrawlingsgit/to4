
import React from "react";
import "./App.css";
import Header from './components/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="app">
    <Router>
      <Routes>
      
        <Route exact path="/" element={<Header />}/>
        <Route path="/" element={<Header />} />
      </Routes> 
    </Router>
    </div>
  );
}
console.log('testing')
export default App;