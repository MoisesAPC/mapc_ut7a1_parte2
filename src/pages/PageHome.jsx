import 'regenerator-runtime/runtime';
import React, { useState } from 'react';
import ListaAnimales from '/src/components/ListaAnimales.jsx'
import Dashboard from '/src/components/Dashboard.jsx'
import VozComandosHome from '/src/components/voz/VozComandosHome.jsx'
import VozComandosCardAnimalDetalles from '/src/components/voz/VozComandosCardAnimalDetalles.jsx'

import CardAnimalDetalles from '/src/components/CardAnimalDetalles.jsx'

// Lista de animales (menú principal)
const animales = [
  {
      id: 1,
      nombre: "Perro",
      alt: "Un perro",
      imagen: 'src/assets/icono_perro.jpg'
  },
  {
      id: 2,
      nombre: "Gato",
      alt: "Un gato",
      imagen: 'src/assets/icono_gato.jpg'
  },
  {
      id: 3,
      nombre: "Lagarto",
      alt: "Un lagarto",
      imagen: 'src/assets/icono_lagarto.jpg'
  },
  {
      id: 4,
      nombre: "Tortuga",
      alt: "Un tortuga",
      imagen: 'src/assets/icono_tortuga.jpg'
  },
  {
      id: 5,
      nombre: "Bovino",
      alt: "Un bovino",
      imagen: 'src/assets/icono_bovino.jpg'
  }
];

function PageHome() {

  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={animales} />
        </div>
        <CardAnimalDetalles id={1} nombre={'Prueba'} imagen={'src/assets/perros/boxer.jpg'} alt={'prueba_alt'} tamano={500}
        informacion={'descripcion prueba'} pelaje={'pelaje_prueba'} caracter={'caracter_prueba'}/>
        <VozComandosCardAnimalDetalles />
    </>
  );
}

export default PageHome;
