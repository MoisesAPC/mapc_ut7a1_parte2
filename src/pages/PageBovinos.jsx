import 'regenerator-runtime/runtime';
import React from 'react'
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'

// Lista de bovinos
const bovinos = [
  {
      id: 1,
      nombre: "Búfalo",
      alt: "Un búfalo",
      imagen: 'src/assets/bovinos/bufalo.jpg'
  },
  {
      id: 2,
      nombre: "Toro",
      alt: "Un toro",
      imagen: 'src/assets/bovinos/toro.jpg'
  },
  {
      id: 3,
      nombre: "Vaca",
      alt: "Un vaca",
      imagen: 'src/assets/bovinos/vaca.jpg'
  }
];

function App() {
  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={bovinos} />
        </div>
    </>
  );
}

export default App;
