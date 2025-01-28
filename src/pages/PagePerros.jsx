import 'regenerator-runtime/runtime';
import React from 'react'
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'
import VozComandosAnimal from '/src/components/voz/VozComandosAnimal.jsx'

// Lista de perros
export const perros = [
  {
    id: 1,
    nombre: "Boxer",
    alt: "Un bóxer",
    imagen: 'src/assets/perros/boxer.jpg',
    informacion: "El Bóxer es un perro de tamaño mediano a grande, conocido por su lealtad y energía.",
    pelaje: "Corto, liso y pegado al cuerpo. Fácil de cuidar.",
    caracter: "Juguetón, leal, protector y excelente con los niños."
  },
  {
    id: 2,
    nombre: "Breton",
    alt: "Un bretón",
    imagen: 'src/assets/perros/breton.jpg',
    informacion: "El Bretón es un perro de caza de tamaño mediano, ágil y resistente.",
    pelaje: "Medio largo, liso o ligeramente ondulado. Requiere cepillado regular.",
    caracter: "Inteligente, cariñoso, enérgico y fácil de entrenar."
  },
  {
    id: 3,
    nombre: "Caniche",
    alt: "Un caniche",
    imagen: 'src/assets/perros/caniche.jpg',
    informacion: "El Caniche es una raza inteligente y versátil, disponible en varios tamaños.",
    pelaje: "Rizado y denso, requiere cuidados regulares y cortes de pelo frecuentes.",
    caracter: "Muy inteligente, juguetón, activo y fácil de entrenar."
  }
];


function PagePerros() {
  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={perros} />
        </div>

        <VozComandosAnimal animal="perros" razas={perros} />
    </>
  );
}

export default PagePerros;
