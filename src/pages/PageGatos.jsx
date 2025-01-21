import 'regenerator-runtime/runtime';
import React from 'react'
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'

// Lista de gatos
const gatos = [
  {
      id: 1,
      nombre: "Persa",
      alt: "Un persa",
      imagen: 'src/assets/gatos/persa.jpg'
  },
  {
      id: 2,
      nombre: "Siamés",
      alt: "Un siamés",
      imagen: 'src/assets/gatos/siames.jpg'
  },
  {
      id: 3,
      nombre: "Siberiano",
      alt: "Un siberiano",
      imagen: 'src/assets/gatos/siberiano.jpg'
  }
];

function App() {
  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={gatos} />
        </div>
    </>
  );
}

export default App;
