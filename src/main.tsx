import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/app.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './pages/error-page.tsx';
import { CardsTable } from './pages/cards-table.tsx';
import { MuiTest } from './pages/mui-test.tsx';
import { SetsTable } from './pages/sets-table.tsx';
import { loaderSet, loaderSetList } from './loaders/loaders.ts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <SetsTable />,
                loader: loaderSetList,
            },
            {
                path: 'set/:code',
                element: <CardsTable />,
                loader: loaderSet,
            },
            {
                path: 'mui',
                element: <MuiTest />
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
