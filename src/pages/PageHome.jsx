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
  const [comandoDetectado, setComandoDetectado] = useState(null);

  const manejarComando = (comando) => {
    setComandoDetectado(comando);
  };

  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
            <ListaAnimales animales={animales} />
        </div>

        <CardAnimalDetalles id={1} nombre={'Prueba'} imagen={'src/assets/perros/boxer.jpg'} alt={'prueba_alt'} tamano={500}
        informacion={'descripcion prueba'} pelaje={'pelaje_prueba'} caracter={'caracter_prueba'}
        // Le pasamos EL BOOLEANO que nos dice que la variable de abrirInformacion se puso a true
        // tras la llamada a la funcion "comandoInformacion"
        comandoDetectado={comandoDetectado}/>
        
        <VozComandosCardAnimalDetalles
        // Llamamos a la funcion "comandoInformacion", la cual estara ejecutandose 
        // constantemente mienntras el componente "VozComandosCardAnimalDetalles" esté activo
        // Si esta funcion retorna true, entonces "setAbrirInformacion" tambien se pondra a true
        // lo que hará que "informacionAbierta" se ponga a true, y así se pueda abrir el collapse en "CardAnimalDetalles"
        enviarComando={manejarComando} />
    </>
  );
}

export default PageHome;
