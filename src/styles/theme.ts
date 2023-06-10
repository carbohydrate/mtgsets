import { createTheme } from '@mui/material';
// import { grey, red } from "@mui/material/colors";

// BCB8B3 - grey hint of orange

// https://m2.material.io/inline-tools/color/

export const theme = createTheme({
    palette: {
        primary: {
            main: '#bcb8b3',
            light: '#fdf9f4',
            dark: '#413d39',
        },
        secondary: {
            main: '#b3b7bc',
            light: '#f5faff',
            dark: '#393d41',
        },
    },
    typography: {
        fontSize: 16, // mui default is 14. body1 is 16
    }
});
