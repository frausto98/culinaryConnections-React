import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import ErrorPage from './pages/Error.jsx';
import Home from './pages/home.jsx';
import FormPage from './pages/FormPage.jsx';
import MainPage from './pages/MainPage.jsx';
import RecipeDetails from './pages/RecipeDetails.jsx';
import RecipeForm from './pages/RecipeForm.jsx';
import Profile from './pages/Profile.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
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
      {
        path: '/recipes/:recipeId',
        element: <RecipeDetails/>
      },
      {
        path: '/recipe-form',
        element: <RecipeForm/>
      },
      {
        path: '/users/:username',
        element: <Profile/>
      },
      // {
      //   path: '/me',
      //   element: <Profile/>
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
