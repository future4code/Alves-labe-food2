import Router from './router/Router';
import './App.css';
import {ThemeProvider} from '@mui/material'
import TelaLogin from './pages/Login/TelaLogin/TelaLogin';

const App = () => {
  return (
    <ThemeProvider >
      <Router />
      {/* <TelaLogin/> */}
    </ThemeProvider>
    
  );
}

export default App;
