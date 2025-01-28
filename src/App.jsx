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
import { gatos } from '/src/pages/PageGatos.jsx';
import { lagartos } from '/src/pages/PageLagartos.jsx';
import { tortugas } from '/src/pages/PageTortugas.jsx';
import { bovinos } from '/src/pages/PageBovinos.jsx';

//import Pruebas from './components/Pruebas'
//importamos la función createBrowserRouter y el componente RouterProvider
//de la librería react-router-dom
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

function quitarTildesYPonerEnMinuscula(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Array con la información de cada animal, por raza
// Perros
const boxerInfo = perros.find(perro => quitarTildesYPonerEnMinuscula(perro.nombre) === 'boxer');
const bretonInfo = perros.find(perro => quitarTildesYPonerEnMinuscula(perro.nombre) === 'breton');
const canicheInfo = perros.find(perro => quitarTildesYPonerEnMinuscula(perro.nombre) === 'caniche');

// Gatos
const persaInfo = gatos.find(gato => quitarTildesYPonerEnMinuscula(gato.nombre) === 'persa');
const siamesInfo = gatos.find(gato => quitarTildesYPonerEnMinuscula(gato.nombre) === 'siames');
const siberianoInfo = gatos.find(gato => quitarTildesYPonerEnMinuscula(gato.nombre) === 'siberiano');

// Lagartos
const atlanticoInfo = lagartos.find(lagarto => quitarTildesYPonerEnMinuscula(lagarto.nombre) === 'atlantico');
const camaleonInfo = lagartos.find(lagarto => quitarTildesYPonerEnMinuscula(lagarto.nombre) === 'camaleon');
const iguanaInfo = lagartos.find(lagarto => quitarTildesYPonerEnMinuscula(lagarto.nombre) === 'iguana');

// Tortugas
const bobaInfo = tortugas.find(tortuga => quitarTildesYPonerEnMinuscula(tortuga.nombre) === 'boba');
const galapagoInfo = tortugas.find(tortuga => quitarTildesYPonerEnMinuscula(tortuga.nombre) === 'galapago');
const laudInfo = tortugas.find(tortuga => quitarTildesYPonerEnMinuscula(tortuga.nombre) === 'laud');

// Bovinos
const bufaloInfo = bovinos.find(bovino => quitarTildesYPonerEnMinuscula(bovino.nombre) === 'bufalo');
const toroInfo = bovinos.find(bovino => quitarTildesYPonerEnMinuscula(bovino.nombre) === 'toro');
const vacaInfo = bovinos.find(bovino => quitarTildesYPonerEnMinuscula(bovino.nombre) === 'vaca');

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
      
      // Perros
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

      // Gatos
      {
        path: '/gatos/persa',
        element: <PageAnimalDetalles animalInfo={persaInfo} />
      },
      {
        path: '/gatos/siames',
        element: <PageAnimalDetalles animalInfo={siamesInfo} />
      },
      {
        path: '/gatos/siberiano',
        element: <PageAnimalDetalles animalInfo={siberianoInfo} />
      },

      // Lagarto
      {
        path: '/lagartos/atlantico',
        element: <PageAnimalDetalles animalInfo={atlanticoInfo} />
      },
      {
        path: '/lagartos/camaleon',
        element: <PageAnimalDetalles animalInfo={camaleonInfo} />
      },
      {
        path: '/lagartos/iguana',
        element: <PageAnimalDetalles animalInfo={iguanaInfo} />
      },

      // Tortuga
      {
        path: '/tortugas/boba',
        element: <PageAnimalDetalles animalInfo={bobaInfo} />
      },
      {
        path: '/tortugas/galapago',
        element: <PageAnimalDetalles animalInfo={galapagoInfo} />
      },
      {
        path: '/tortugas/laud',
        element: <PageAnimalDetalles animalInfo={laudInfo} />
      },

      // Bovino
      {
        path: '/bovinos/bufalo',
        element: <PageAnimalDetalles animalInfo={bufaloInfo} />
      },
      {
        path: '/bovinos/toro',
        element: <PageAnimalDetalles animalInfo={toroInfo} />
      },
      {
        path: '/bovinos/vaca',
        element: <PageAnimalDetalles animalInfo={vacaInfo} />
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
