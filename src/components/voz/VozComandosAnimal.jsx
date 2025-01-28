import React from 'react';
import { useNavigate } from 'react-router-dom';
// npm i react-speech-recognition
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// Dada una string que le pasemos, esta función nos quitará las tildes.
// Esto lo debemos hacer para que, si una raza tiene tilde (ej. bretón),
// el listener que escucha por los comandos de voz reconozca la palabra sin tilde,
// ya que los endpoint de cada raza de animal no llevan tilde (ej. /perros/breton)
// Además, para evitar conflictos en caso de que sea case sensitive, pasamos el nombre de la raza
// a minúscula usanto "toLowerCase"
function quitarTildesYPonerEnMinuscula(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function VozComandosAnimal({ animal, razas }) {
      const navigate = useNavigate();

      /* Estos son los comandos de voz reconocidos por este componente */
      const comandos = [
        {
          command: 'inicio',
          callback: () => {
            navigate('/');
          },
          isFuzzyMatch: true,
          fuzzyMatchingThreshold: 0.6
        },
        ...razas.flatMap(raza => [
          // El nombre de la raza (con tildes)
          {
            command: raza.nombre,
            callback: () => {
              console.log(`/${animal}/${quitarTildesYPonerEnMinuscula(raza.nombre)}`);
              navigate(`/${animal}/${quitarTildesYPonerEnMinuscula(raza.nombre)}`);
            },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.6
          },
          // El nombre de la raza (sin tildes)
          {
            command: quitarTildesYPonerEnMinuscula(raza.nombre),
            callback: () => {
              console.log(`/${animal}/${quitarTildesYPonerEnMinuscula(raza.nombre)}`);
              navigate(`/${animal}/${quitarTildesYPonerEnMinuscula(raza.nombre)}`);
            },
            isFuzzyMatch: true,
            fuzzyMatchingThreshold: 0.6
          }
        ])
      ];

      /* Transcribimos los comandos reconocidos por voz en la variable transcript */
      const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition({ commands: comandos });
      
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
      return (
        <div>
          <p>Micrófono: {listening ? 'ON' : 'OFF'}</p>
          
          {/* Pulsa Start para empezar a escuchar, Stop para parar */}
          <button onClick={() => SpeechRecognition.startListening({ language: 'es-ES' })}>Start</button>
          <button onClick={() => SpeechRecognition.stopListening}>Stop</button>

          {/* Imprimimos lo que se diga al micrófono */}
          <p>{transcript}</p>
        </div>
      );
    };

export default VozComandosAnimal;
