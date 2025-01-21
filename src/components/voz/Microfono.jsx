import React from 'react';
// npm i react-speech-recognition
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

//Ejemplo en el que se transcribe lo que dice la persona
//cuando encendemos el micro
function Microfono() {
      const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
      }
    
      return (
        <div>
          <p>Micrófono: {listening ? 'ON' : 'OFF'}</p>
          
          {/* Para que el micrófono esté constantemente escuchando */}
          <button onClick={() => SpeechRecognition.startListening({continuous: true})}>Start</button>

          <button onClick={SpeechRecognition.stopListening}>Stop</button>
          <button onClick={resetTranscript}>Reset</button>
          <p>{transcript}</p>
        </div>
      );
    };
    

export default Microfono;
