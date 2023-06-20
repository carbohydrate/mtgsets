import { useState } from 'react';
import { Backdrop, CircularProgress, Container, ThemeProvider } from '@mui/material';
import { Link, Outlet, useNavigation } from 'react-router-dom';
import { theme } from '../styles/theme';
import { ScrollToTop } from './scroll-to-top';

export const App: React.FC = () => {
    const [hidden, setHidden] = useState<number>(0);
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
                    {hidden >= 5 ? <Link to='mui'>MUI Test</Link> : <div onClick={() => setHidden(hidden + 1)} style={{ height: '16px' }}></div>}
                    <Outlet />
                </ScrollToTop>
            </Container>
        </ThemeProvider>
    );
};
