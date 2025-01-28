import 'regenerator-runtime/runtime';
import React from 'react'
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'
import VozComandosAnimal from '/src/components/voz/VozComandosAnimal.jsx'

// Lista de gatos
export const gatos = [
  {
    id: 1,
    nombre: "Persa",
    alt: "Un persa",
    imagen: '/src/assets/gatos/persa.jpg',
    informacion: "El gato Persa es conocido por su cara plana y su pelaje largo y lujoso.",
    pelaje: "Largo, denso y sedoso. Requiere cepillado diario.",
    caracter: "Tranquilo, afectuoso y de voz suave. Ideal para hogares tranquilos."
  },
  {
    id: 2,
    nombre: "Siamés",
    alt: "Un siamés",
    imagen: '/src/assets/gatos/siames.jpg',
    informacion: "El Siamés es elegante, con ojos azules y un pelaje de color claro con puntos oscuros.",
    pelaje: "Corto, fino y pegado al cuerpo. Fácil de cuidar.",
    caracter: "Inteligente, vocal y muy apegado a sus dueños. Necesita mucha atención."
  },
  {
    id: 3,
    nombre: "Siberiano",
    alt: "Un siberiano",
    imagen: '/src/assets/gatos/siberiano.jpg',
    informacion: "El gato Siberiano es grande y robusto, originario de los bosques de Rusia.",
    pelaje: "Semi-largo, grueso y resistente al agua. Muda estacionalmente.",
    caracter: "Juguetón, cariñoso y adaptable. Se lleva bien con niños y otros animales."
  }
];

function PageGatos() {
  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={gatos} />
        </div>

        <VozComandosAnimal animal="gatos" razas={gatos} />
    </>
  );
}

export default PageGatos;
