import React from 'react';
import useWordGame from './hooks/useWordGame';
import './App.css';

function App() {
  const {textBoxRef, text, handleChange, isTimeRunning, timeRemaining, startGame, wordCount} = useWordGame(5)
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        ref={textBoxRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled = {isTimeRunning}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App
