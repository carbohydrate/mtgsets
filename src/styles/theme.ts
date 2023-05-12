import { createTheme } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
          main: red[500],
        },
        secondary: {
          main: grey[50],
        },
    },
    typography: {
        fontSize: 16, // mui default is 14. body1 is 16
    }
});
