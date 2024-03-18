import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/home.jsx';
import FormPage from './pages/FormPage.jsx';
import MainPage from './pages/MainPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/login-signup',
        element: <FormPage/>
      },
      {
        path: '/home',
        element: <MainPage/>
      },
      // {
      //   path: '/Page3'
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
