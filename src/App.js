import './App.css';
import Board from './components/boardComponent';
import React, { useEffect, useState } from 'react';

function App() {

  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  useEffect(() => {
    console.log(`app.js - level: ${level}`)
  })

  const goToNextLevel = () => {
    let new_level = level + 1;
    setLevel(new_level);
    console.log("app.js - updated level");
  }

  const saveScore = () => {

    console.log(`inserting score: ${score} in DB`);
  }

  const updateScore = (merit) => {
    let new_score = score + merit;

    setScore(new_score);
    saveScore(score);
  }

  return (
    <div>
      <div><Board level={level} goToNextLevel={goToNextLevel}/></div>
    </div>

  );
}

export default App;
