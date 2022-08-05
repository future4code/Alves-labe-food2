import Router from './router/Router';
import './App.css';
import { ThemeProvider } from '@mui/material'
import theme from './constants/theme';
import GlobalState from './global/GlobalState';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ImgSplashScreen  from './assets/SplashScreen.png'

const App = () => {

  const [isLoading, setIsLoading] = useState(true);
 useEffect(() => {
   setTimeout(() => {
     setIsLoading(false);
   }, 1000);
 }, []);

 const Override = styled.img`
 display: block;
 margin: 0 auto;
 border-color: red;
 width: 30vw;
 align-items: center;
 color: black;
 padding-top: 30%;
`;
const TelaSplash = styled.div`
  background-color: black;
   width: 100vw; 
  height: 100vh;
`
 return isLoading ?
      <TelaSplash>
          <Override src={ImgSplashScreen} isLoading={isLoading}/>
      </TelaSplash>:
   <div className="App">
     <ThemeProvider theme={theme}>
         <GlobalState>
        {/* <section> */}
            <Router />
         {/* </section> */}
           </GlobalState>
         </ThemeProvider>
   </div>
}
export default App;
