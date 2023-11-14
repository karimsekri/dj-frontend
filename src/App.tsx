import { useState } from 'react'
import './App.scss'
import Connexion from './components/Connexion';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {

  const maRoute = createBrowserRouter([
    {
      path: "/",
      element: <Connexion />,
    }
  ]);

  return (
    <>
      <RouterProvider router={maRoute} />
    </>
  )
}

export default App
