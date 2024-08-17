import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  // Set initial state to false to start with the paragraph hidden
  const [isVisible, setIsVisible] = useState(false);

  // Function to toggle visibility
  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return (
    <div className="App" id="main">
      {/* SGN */}
      <p className={isVisible ? 'show' : 'hide'} id="para">
        Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy.
      </p>

      <button id="click" onClick={toggleVisibility}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
    </div>
  );
}

export default App;