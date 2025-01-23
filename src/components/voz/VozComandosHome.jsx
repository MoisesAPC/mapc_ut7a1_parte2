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
          }
        },
        {
          command: 'Perro',
          callback: () => {
            navigate('/perros');
          }
        },
        {
          command: 'Lagarto',
          callback: () => {
            navigate('/lagartos');
          }
        },
        {
          command: 'Tortuga',
          callback: () => {
            navigate('/tortugas');
          }
        },
        {
          command: 'Bovino',
          callback: () => {
            navigate('/bovinos');
          }
        }
      ];

      /* Transcribimos los comandos reconocidos por voz en la variable transcript */
      const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition({ comandos });
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
      return (
        <div>
          <p>Micrófono: {listening ? 'ON' : 'OFF'}</p>
          
          {/* Para que el micrófono esté constantemente escuchando */}
          <button onClick={() => SpeechRecognition.startListening({continuous: true})}>Haz click para empezar a escuchar</button>

          {/* Imprimimos lo que se diga al micrófono */}
          <p>{transcript}</p>
        </div>
      );
    };
    

export default VozComandosHome;
