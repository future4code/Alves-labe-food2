import Router from './router/Router';
import './App.css';
import { ThemeProvider } from '@mui/material'
import theme from './constants/theme';
import GlobalState from './global/GlobalState';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgSplashScreen from './assets/SplashScreen.png'
import Celular from "./assets/celular.png"
import InfoCelular from './components/infoCelular/InfoCelular';
const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

   const Override = styled.img`
   display: block;
   margin: auto;
   border-color: red;
   width: 30vw;
   align-items: center;
   color: black;
  `;
  const TelaSplash = styled.div`
  background: black;

  @media screen and (max-width:414px) {
    max-width: 414px ;
    min-height: 100vh;
    max-height: 915px;
  }

  @media screen and (min-width:913px) {
    width: 400px ;
    min-height:650px;
    height: 100%;
    border-radius: 10px;
  }

`;

  return isLoading ?
    <TelaSplash>

      <Override src={ImgSplashScreen} isLoading={isLoading}/>
      {/* <div className="ldBar" data-preset="circle" data-value="50"></div> */}
     
    </TelaSplash> :
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalState>
          <InfoCelular />
          <Router />
        </GlobalState>
      </ThemeProvider>
    </div>
}
export default App;
