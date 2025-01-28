import 'regenerator-runtime/runtime';
import React from 'react'
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'
import VozComandosAnimal from '/src/components/voz/VozComandosAnimal.jsx'

// Lista de lagartos
export const lagartos = [
  {
    id: 1,
    nombre: "Atlántico",
    alt: "Un lagarto atlántico",
    imagen: '/src/assets/lagartos/atlantico.jpg',
    informacion: "El lagarto atlántico es una especie endémica de las Islas Canarias, conocido por su coloración azul brillante.",
    pelaje: "Escamas pequeñas y lisas. Los machos adultos desarrollan una coloración azul intensa.",
    caracter: "Diurno, territorial y adaptado a ambientes rocosos. Se alimenta principalmente de insectos y plantas."
  },
  {
    id: 2,
    nombre: "Camaleón",
    alt: "Un camaleón",
    imagen: '/src/assets/lagartos/camaleon.jpg',
    informacion: "Los camaleones son conocidos por su capacidad de cambiar de color y sus ojos que pueden moverse independientemente.",
    pelaje: "Piel cubierta de pequeñas escamas que pueden cambiar de color para camuflaje o comunicación.",
    caracter: "Solitario, lento en sus movimientos pero rápido para cazar con su larga lengua. Prefiere ambientes arborícolas."
  },
  {
    id: 3,
    nombre: "Iguana",
    alt: "Una iguana",
    imagen: '/src/assets/lagartos/iguana.jpg',
    informacion: "Las iguanas son grandes lagartos herbívoros, conocidos por su cresta dorsal y su larga cola.",
    pelaje: "Escamas gruesas y una cresta dorsal de espinas. Colores variables, desde verde hasta naranja o azul.",
    caracter: "Generalmente pacífico, pero puede ser territorial. Son excelentes nadadores y trepadores."
  }
];

function PageLagartos() {
  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={lagartos} />
        </div>

        <VozComandosAnimal animal="lagartos" razas={lagartos} />
    </>
  );
}

export default PageLagartos;
