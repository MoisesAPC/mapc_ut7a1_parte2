import 'regenerator-runtime/runtime';
import React from 'react'
import PageHome from '/src/pages/PageHome.jsx'
import PageGatos from '/src/pages/PageGatos.jsx'
import PagePerros from '/src/pages/PagePerros.jsx'
import PageBovinos from '/src/pages/PageBovinos.jsx'
import PageTortugas from '/src/pages/PageTortugas.jsx'
import PageLagartos from '/src/pages/PageLagartos.jsx'
import PageAnimalDetalles from '/src/pages/PageAnimalDetalles.jsx'

import { perros } from '/src/pages/PagePerros.jsx';

//import Pruebas from './components/Pruebas'
//importamos la función createBrowserRouter y el componente RouterProvider
//de la librería react-router-dom
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const boxerInfo = perros.find(perro => perro.nombre.toLowerCase() === 'boxer');
const bretonInfo = perros.find(perro => perro.nombre.toLowerCase() === 'breton');
const canicheInfo = perros.find(perro => perro.nombre.toLowerCase() === 'caniche');

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        index: true,
        element: <PageHome />
      },
      {
        path: '/perros',
        element: <PagePerros />
      },
      {
        path: '/gatos',
        element: <PageGatos />
      },
      {
        path: '/bovinos',
        element: <PageBovinos />
      },
      {
        path: '/tortugas',
        element: <PageTortugas />
      },
      {
        path: '/lagartos',
        element: <PageLagartos />
      },
      
      {
        path: '/perros/boxer',
        element: <PageAnimalDetalles animalInfo={boxerInfo} />
      },
      {
        path: '/perros/breton',
        element: <PageAnimalDetalles animalInfo={bretonInfo} />
      },
      {
        path: '/perros/caniche',
        element: <PageAnimalDetalles animalInfo={canicheInfo} />
      },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
