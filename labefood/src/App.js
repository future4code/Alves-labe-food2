import Router from './router/Router';
import './App.css';
import { ThemeProvider } from '@mui/material'
import theme from './constants/theme';
import TelaLogin from './pages/Login/TelaLogin/TelaLogin';
import GlobalState from './global/GlobalState';


const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Router />
        {/* <TelaLogin/> */}
      </GlobalState>
    </ThemeProvider>

  );
}

export default App;
