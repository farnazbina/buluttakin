import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './components/Layout';
import DashboardProfile from './components/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <DashboardProfile />
      },
    ]
  }
])

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
