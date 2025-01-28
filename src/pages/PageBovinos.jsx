import 'regenerator-runtime/runtime';
import React from 'react'
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'
import VozComandosAnimal from '/src/components/voz/VozComandosAnimal.jsx'

// Lista de bovinos
export const bovinos = [
  {
    id: 1,
    nombre: "Búfalo",
    alt: "Un búfalo",
    imagen: '/src/assets/bovinos/bufalo.jpg',
    informacion: "El búfalo de agua es un bovino robusto, originario de Asia y conocido por su fuerza y adaptabilidad.",
    pelaje: "Piel gruesa con pelo escaso y áspero. Color generalmente gris oscuro o negro.",
    caracter: "Dócil con los humanos, pero puede ser territorial. Excelente nadador y adaptado a climas cálidos y húmedos."
  },
  {
    id: 2,
    nombre: "Toro",
    alt: "Un toro",
    imagen: '/src/assets/bovinos/toro.jpg',
    informacion: "El toro es el macho no castrado del ganado vacuno, conocido por su fuerza y su papel en la tauromaquia.",
    pelaje: "Varía según la raza, desde pelo corto y fino hasta largo y lanudo. Colores diversos.",
    caracter: "Fuerte y a menudo agresivo, especialmente durante la época de celo. Territorial y dominante en su manada."
  },
  {
    id: 3,
    nombre: "Vaca",
    alt: "Una vaca",
    imagen: '/src/assets/bovinos/vaca.jpg',
    informacion: "La vaca es la hembra del ganado vacuno, criada principalmente para la producción de leche y carne.",
    pelaje: "Varía según la raza. Puede ser corto y suave o largo y grueso. Patrones de color diversos.",
    caracter: "Generalmente dócil y gregaria. Forma fuertes vínculos sociales dentro del rebaño. Conocida por su curiosidad."
  }
];

function PageBovinos() {
  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={bovinos} />
        </div>

        <VozComandosAnimal animal="bovinos" razas={bovinos} />
    </>
  );
}

export default PageBovinos;
