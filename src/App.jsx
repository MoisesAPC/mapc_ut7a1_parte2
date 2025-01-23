import 'regenerator-runtime/runtime';
import React from 'react'
import PageHome from '/src/pages/PageHome.jsx'
import PageGatos from '/src/pages/PageGatos.jsx'
import PagePerros from '/src/pages/PagePerros.jsx'
import PageBovinos from '/src/pages/PageBovinos.jsx'
import PageTortugas from '/src/pages/PageTortugas.jsx'
import PageLagartos from '/src/pages/PageLagartos.jsx'

//import Pruebas from './components/Pruebas'
//importamos la función createBrowserRouter y el componente RouterProvider
//de la librería react-router-dom
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

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
