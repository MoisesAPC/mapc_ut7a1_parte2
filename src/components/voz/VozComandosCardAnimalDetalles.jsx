import React from 'react';
import { useNavigate } from 'react-router-dom';
// npm i react-speech-recognition
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function VozComandosCardAnimalDetalles({ enviarComando }) {
      const navigate = useNavigate();

      /* Estos son los comandos de voz reconocidos por este componente */
      const comandos = [
        {
          command: 'Informacion',
          callback: () => {
            enviarComando('informacion');
          },
          isFuzzyMatch: true,
          fuzzyMatchingThreshold: 0.6
        },
        {
          command: 'pelaje',
          callback: () => {
            enviarComando('pelaje');
          },
          isFuzzyMatch: true,
          fuzzyMatchingThreshold: 0.6
        },
        {
          command: 'caracter',
          callback: () => {
            enviarComando('caracter');
          },
          isFuzzyMatch: true,
          fuzzyMatchingThreshold: 0.6
        },
        {
          // Borra todo lo que hayamos hablado para volver a empezar a escuchar de 0
          command: 'borrar',
          callback: ({ resetTranscript }) => resetTranscript()
        }
      ];

      /* Transcribimos los comandos reconocidos por voz en la variable transcript */
      const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition({ commands: comandos });

      console.log(transcript)
      
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

export default VozComandosCardAnimalDetalles;
