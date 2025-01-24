import 'regenerator-runtime/runtime';
import React from 'react'
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'
import VozComandosPerro from '/src/components/voz/VozComandosPerro.jsx'

// Lista de perros
const perros = [
  {
      id: 1,
      nombre: "Bóxer",
      alt: "Un bóxer",
      imagen: 'src/assets/perros/boxer.jpg'
  },
  {
      id: 2,
      nombre: "Bretón",
      alt: "Un bretón",
      imagen: 'src/assets/perros/breton.jpg'
  },
  {
      id: 3,
      nombre: "Caniche",
      alt: "Un caniche",
      imagen: 'src/assets/perros/caniche.jpg'
  }
];

function PagePerros() {
  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={perros} />
        </div>
        <VozComandosPerro/>
    </>
  );
}

export default PagePerros;
