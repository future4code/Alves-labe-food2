import { createTheme } from "@material-ui/core";
import { primaryColor, neutralColor } from "./color";

const theme = createTheme({
    primary: {
      main: primaryColor,
      contrastext: "white",
    },
    text: {
      primary: neutralColor,
      secondary: "#D0D0D0", //gray
    },
  
});

export default theme;
