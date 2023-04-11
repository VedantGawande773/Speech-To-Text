import React from "react";
import "./App.css";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const App = () => {

  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({  });

  if (!browserSupportsSpeechRecognition) {
    return null
  }


  return (
    <>
      <div className="container">
        <h2>Speech To Text Converter</h2>
        <br />
        <p>A React app that will convert wahtever you speak into text and you can copy this text also</p>

      <div className="main-content">
        {transcript}
      </div>

      <div className="btn-style">

      <button>Copy</button>
      <button onClick={startListening}>Start Listening</button>
      <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
    
      </div>

      </div>
    </>
  );
};

export default App;