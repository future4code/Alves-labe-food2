import Router from './router/Router';
import './App.css';
import {ThemeProvider} from '@mui/material'
import theme from './constants/theme';
import TelaLogin from './pages/Login/TelaLogin/TelaLogin';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
      {/* <TelaLogin/> */}
    </ThemeProvider>
    
  );
}

export default App;
