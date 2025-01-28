import React from 'react';
import { useNavigate } from 'react-router-dom';
// npm i react-speech-recognition
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function VozComandosAnimal({ animal, razas }) {
      const navigate = useNavigate();

      /* Estos son los comandos de voz reconocidos por este componente */
      const comandos = razas.map(raza => ({
        command: raza.nombre,
        callback: () => {
          navigate(`/${animal}/${raza.nombre.toLowerCase()}`);
        },
        isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.6
      }));

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
