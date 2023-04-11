import React from "react";
import "./App.css"

const App = () => {
  return (
    <>
      <div className="container">
        <h2>Speech To Text Converter</h2>
        <br />
        <p>A React app that will convert wahtever you speak into text and you can copy this text also</p>

      <div className="main-content">

      </div>

      <div className="btn-style">

      <button>Copy</button>
      <button>Start Listening</button>
      <button>Stop Listening</button>

      </div>

      </div>
    </>
  );
};

export default App;