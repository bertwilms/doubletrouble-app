import React from "react" ;
import {  BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components" ;
import './App.css';
import WedstrijdPage from "./pages/WedstrijdPage";
import KlassementPage from "./pages/KlassementPage";



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
        <Router>
          <Switch>
            <Route path="/klassement">
              <KlassementPage />
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
