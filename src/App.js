import React, { useState } from 'react';
import './style.css';

const App = () => {
  const state = useState();
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  return (
    <>
      <div>
        <h1> {count} </h1>
        <button onClick={IncNum}> CLICK ME </button>
      </div>
    </>
  );
};

export default App;
