import { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Components/RootLayout/Root.jsx';
import Home from './Components/Pages/Home page/Home.jsx';
import TimeLine from './Components/Pages/TimeLine Page/TimeLine.jsx';
import Stats from './Components/Pages/Stats Page/Stats.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/timeline',
       element:<TimeLine></TimeLine>
      },
      {
        path: '/stats',
        element: <Stats></Stats>,
      },
    ],
    errorElement: <div>This Page Not Found </div>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
