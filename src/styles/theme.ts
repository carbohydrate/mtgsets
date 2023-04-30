import { createTheme } from "@mui/material";
import { green, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
          main: red[500],
        },
        secondary: {
          main: green[500],
        },
    },
    typography: {
        fontSize: 16, // mui default is 14. body1 is 16
    }
});
