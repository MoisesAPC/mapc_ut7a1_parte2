import 'regenerator-runtime/runtime';
import React from 'react'
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'
import VozComandosAnimal from '/src/components/voz/VozComandosAnimal.jsx'

// Lista de tortugas
export const tortugas = [
  {
    id: 1,
    nombre: "Boba",
    alt: "Una tortuga boba",
    imagen: '/src/assets/tortugas/boba.jpg',
    informacion: "La tortuga boba es una especie marina de gran tamaño, conocida por sus largas migraciones oceánicas.",
    pelaje: "Caparazón duro y óseo, de color marrón rojizo. Piel escamosa en las aletas y la cabeza.",
    caracter: "Solitaria y migratoria. Pasa la mayor parte de su vida en el mar, regresando a las playas solo para anidar."
  },
  {
    id: 2,
    nombre: "Galápago",
    alt: "Un galápago",
    imagen: '/src/assets/tortugas/galapago.jpg',
    informacion: "El galápago es una tortuga de agua dulce, común en ríos y lagos de Europa y Norte de África.",
    pelaje: "Caparazón aplanado y oscuro. Piel verdosa o marrón con manchas amarillas.",
    caracter: "Semiacuático, pasa mucho tiempo tomando el sol en las orillas. Ágil nadador y cazador oportunista."
  },
  {
    id: 3,
    nombre: "Laúd",
    alt: "Una tortuga laúd",
    imagen: '/src/assets/tortugas/laud.jpg',
    informacion: "La tortuga laúd es la más grande de todas las tortugas marinas, conocida por su caparazón suave y acanalado.",
    pelaje: "Caparazón flexible y acanalado, cubierto de piel correosa. Color predominantemente negro con manchas blancas.",
    caracter: "Pelágica, pasa casi toda su vida en mar abierto. Capaz de bucear a grandes profundidades y tolerar aguas frías."
  }
];

function PageTortugas() {
  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={tortugas} />
        </div>

        <VozComandosAnimal animal="tortugas" razas={tortugas} />
    </>
  );
}

export default PageTortugas;
