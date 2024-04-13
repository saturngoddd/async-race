import React from 'react';
import './layout.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from '../ui/header/header';
import Garage from '../page/Garage';
import Winners from '../page/Winners';

const router = createBrowserRouter([
  {
    element: <Header />,
    errorElement: <div>404 Page is not found</div>,
    children: [
      {
        path: '/',
        element: <Garage />,
      },
      {
        path: '/winners',
        element: <Winners />,
      },
    ],
  },
]);

function Layout() {
  return (
    <div className="layout">
      <RouterProvider router={router} />
    </div>
  );
}

export default Layout;
