import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const[isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="App" id="main">
      {/*  SGN */}
      <p className={isVisible ? 'hide' : 'show'} id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.</p>

      <button id="click" onClick={toggleVisibility} >{isVisible ? 'Show' : 'Hide' } </button>
    </div>
  );
}

export default App
