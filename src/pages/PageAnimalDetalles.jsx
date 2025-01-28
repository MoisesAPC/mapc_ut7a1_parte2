import 'regenerator-runtime/runtime';
import React, { useState, useEffect } from 'react';
import Dashboard from '/src/components/Dashboard.jsx'
import VozComandosCardAnimalDetalles from '/src/components/voz/VozComandosCardAnimalDetalles.jsx'
import CardAnimalDetalles from '/src/components/CardAnimalDetalles.jsx'

function PageAnimalDetalles({ animalInfo }) {
  const [comandoDetectado, setComandoDetectado] = useState(null);

  const manejarComando = (comando) => {
    setComandoDetectado(comando);
  };

  return (
    <>
        <Dashboard/>
        <div style={{ marginTop: '20px' }}>
          <CardAnimalDetalles 
            id={animalInfo.id}
            nombre={animalInfo.nombre}
            imagen={animalInfo.imagen}
            alt={animalInfo.alt}
            tamano={500}
            informacion={animalInfo.informacion}
            pelaje={animalInfo.pelaje}
            caracter={animalInfo.caracter}
            // Le pasamos LA STRING que nos dice que la variable de abrirInformacion se puso a true
            // tras la llamada a la funcion "comandoInformacion"
            comandoDetectado={comandoDetectado}
          />
        </div>
        <VozComandosCardAnimalDetalles
        // Llamamos a la funcion "comandoInformacion", la cual estara ejecutandose 
        // constantemente mientras el componente "VozComandosCardAnimalDetalles" esté activo
        // Si esta funcion retorna true, entonces "setAbrirInformacion" tambien se pondra a true
        // lo que hará que "informacionAbierta" se ponga a true, y así se pueda abrir el collapse en "CardAnimalDetalles"
        enviarComando={manejarComando} />
    </>
  );
}

export default PageAnimalDetalles;
