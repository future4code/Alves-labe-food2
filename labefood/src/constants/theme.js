import { createTheme } from '@mui/material';
import { primaryColor, secundaryColor } from './color';

const theme = createTheme({
    palette: {
        primary: {

            main: primaryColor,
            contrastText: 'white',

        }
    }
});

export default theme