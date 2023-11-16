
import './App.scss'
import Connexion from './components/Connexion';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Musiques from './components/Musiques';
import AjoutDeMusique from './components/AjoutDeMusique';

function App() {
  const maRoute = createBrowserRouter([
    {
      path: "/",
      element: <Connexion />,
    },
    {
      path: "/musiques",
      element: <Musiques />,
    },
    {
      path: "/ajoutDeMusique",
      element: <AjoutDeMusique />,
    }
  ]);

  return (
    <RouterProvider router={maRoute} />
  )
}

export default App
