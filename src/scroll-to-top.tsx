import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
    children: React.ReactNode;
}

export const ScrollToTop: React.FC<ScrollToTopProps> = (props) => {
    const { children } = props;
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>{children}</>
    );
};
