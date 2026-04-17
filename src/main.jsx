import { Children, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router';
import Root from './Components/RootLayout/Root.jsx';
import Home from './Components/Pages/Home page/Home.jsx';
import TimeLine from './Components/Pages/TimeLine Page/TimeLine.jsx';
import Stats from './Components/Pages/Stats Page/Stats.jsx';
import AddDetails from './Components/Pages/AddDetalils/AddDetails.jsx';


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
        element: <TimeLine></TimeLine>,
      },
      {
        path: '/timeline/:id',
        element: <AddDetails></AddDetails>,
      },
      {
        path: '/stats',
        element: <Stats></Stats>,
      },
    ],
    errorElement: (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="text-center">
          {/* 404 Number */}
          <h1 className="text-7xl md:text-8xl font-bold text-green-900">404</h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Sorry, the page you are looking for doesn’t exist or has been moved.
          </p>

          {/* Button */}
          <a
            href="/"
            className="inline-block mt-6 bg-green-900 text-white px-6 py-2 rounded-lg hover:bg-green-800 transition"
          >
            Go Back Home
          </a>
        </div>
      </div>
    ),
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
