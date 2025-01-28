import React from 'react';
import { useNavigate } from 'react-router-dom';
// npm i react-speech-recognition
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function VozComandosHome() {
      const navigate = useNavigate();

      /* Estos son los comandos de voz reconocidos por este componente */
      const comandos = [
        {
          command: 'Gato',
          callback: () => {
            navigate('/gatos');
          },
          isFuzzyMatch: true,
          fuzzyMatchingThreshold: 0.6
        },
        {
          command: 'Perro',
          callback: () => {
            navigate('/perros');
          },
          isFuzzyMatch: true,
          fuzzyMatchingThreshold: 0.6
        },
        {
          command: 'Lagarto',
          callback: () => {
            navigate('/lagartos');
          },
          isFuzzyMatch: true,
          fuzzyMatchingThreshold: 0.6
        },
        {
          command: 'Tortuga',
          callback: () => {
            navigate('/tortugas');
          },
          isFuzzyMatch: true,
          fuzzyMatchingThreshold: 0.6
        },
        {
          command: 'Bovino',
          callback: () => {
            navigate('/bovinos');
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

      //console.log(transcript)
      
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

export default VozComandosHome;
