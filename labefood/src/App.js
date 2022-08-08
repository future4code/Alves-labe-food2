import Router from './router/Router';
import './App.css';
import { ThemeProvider } from '@mui/material'
import theme from './constants/theme';
import GlobalState from './global/GlobalState';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgSplashScreen from './assets/SplashScreen.png'
import Celular from "./assets/celular.png"
import loading from './assets/loading2.gif'
import InfoCelular from './components/infoCelular/InfoCelular';
const App = () => {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const GifLoading = styled.img `
    width: 15%;
  
  `

   const Override = styled.img`
   display: flex;
   margin: auto;
   width: 30%;

  `;
  const TelaSplash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;

  @media screen and (max-width:414px) {
    max-width: 414px ;
    min-height: 100vh;
    height: 100%;
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
      <GifLoading src={loading} isLoading={isLoading} />
     
     
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
