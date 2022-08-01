import Router from './router/Router';
import './App.css';
import {ThemeProvider} from '@mui/material'
import theme from './constants/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
