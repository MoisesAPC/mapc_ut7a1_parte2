import 'regenerator-runtime/runtime';
import React from 'react'
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'

// Lista de lagartos
const lagartos = [
  {
      id: 1,
      nombre: "Atlántico",
      alt: "Una atlántico",
      imagen: 'src/assets/lagartos/atlantico.jpg'
  },
  {
      id: 2,
      nombre: "Camaleón",
      alt: "Un camaleón",
      imagen: 'src/assets/lagartos/camaleon.jpg'
  },
  {
      id: 3,
      nombre: "Iguana",
      alt: "Una iguana",
      imagen: 'src/assets/lagartos/iguana.jpg'
  }
];

function App() {
  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={lagartos} />
        </div>
    </>
  );
}

export default App;
