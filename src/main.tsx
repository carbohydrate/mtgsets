import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/app.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import ErrorPage from './pages/error-page.tsx';
import { SetTable } from './pages/set-table.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        //element: <div>Hello World</div>,
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path: 'set/:code',
        element: <SetTable />
    }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
        {/* <App /> */}
    </React.StrictMode>,
)
