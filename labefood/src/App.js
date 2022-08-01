import Router from './router/Router';
import './App.css';
import {ThemeProvider} from '@mui/material'

const App = () => {
  return (
    <ThemeProvider >
      <Router />
    </ThemeProvider>
  );
}

export default App;
