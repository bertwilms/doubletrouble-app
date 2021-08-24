import React from "react" ;
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components" ;
import './App.css';
import './klassementTable.css';
import WedstrijdPage from "./pages/WedstrijdPage";
import KlassementPage from "./pages/KlassementPage";
import GespeeldPage from "./pages/GespeeldPage";
import image from './images/Header.jpg' ;

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function App() {
  return (
    <React.Fragment>
      <Wrapper>
      <div class="container">
        <img src={image} alt="Padel" height={100} width={500}/> 
        <div class="bottom-right">Masters of Padel</div>
      </div>
      <div class="topnav">
        <a href="/tespelen">Wedstrijden</a>
        <a href="/klassement">Klassement</a>
     </div>   
      
        <Router>
          <Switch>
            <Route path="/klassement">
              <KlassementPage />
            </Route>
            <Route path="/gespeeld">
              <GespeeldPage />
            </Route>            
            <Route path="/">
              <WedstrijdPage />
            </Route>           
          </Switch>
        </Router>
      </Wrapper>
    </React.Fragment>
  );
}

export default App;
