import 'regenerator-runtime/runtime';
import React from 'react'
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'

// Lista de tortugas
const tortugas = [
  {
      id: 1,
      nombre: "Boba",
      alt: "Una boba",
      imagen: 'src/assets/tortugas/boba.jpg'
  },
  {
      id: 2,
      nombre: "Galápago",
      alt: "Un galápago",
      imagen: 'src/assets/tortugas/galapago.jpg'
  },
  {
      id: 3,
      nombre: "Laúd",
      alt: "Un laúd",
      imagen: 'src/assets/tortugas/laud.jpg'
  }
];

function App() {
  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={tortugas} />
        </div>
    </>
  );
}

export default App;
