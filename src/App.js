import './App.css';
import Board from './components/boardComponent';
import React, {useState } from 'react';
import LeaderBoard from './components/leaderboardComponent';

function App() {

  const maxLevel = 4;

  const [level, setLevel] = useState(1);
  const [score, setScore] = useState(0);

  const goToNextLevel = () => {
    let new_level = level + 1;
    setLevel(new_level);
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
      {
      (level < maxLevel)
      ? <div><Board level={level} goToNextLevel={goToNextLevel}/></div>
      : <div><LeaderBoard/></div>
      }
    </div>

  );
}

export default App;
