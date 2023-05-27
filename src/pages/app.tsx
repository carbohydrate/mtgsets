import { Backdrop, CircularProgress, Container } from "@mui/material"
import { ThemeProvider } from '@mui/material';
import { Link, Outlet, useNavigation } from "react-router-dom";
import { theme } from "../styles/theme";
import { ScrollToTop } from "./scroll-to-top";

export const App: React.FC = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading' ? true : false;

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth='lg'>
                <Backdrop
                    open={isLoading}
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                    <CircularProgress />
                </Backdrop>
                <ScrollToTop>
                    <Link to='mui'>MUI Test</Link>
                    <Outlet />
                </ScrollToTop>
            </Container>
        </ThemeProvider>
    );
};
