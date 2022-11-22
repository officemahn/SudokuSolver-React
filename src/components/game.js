import React, { useState } from 'react';
import Board from './boardComponent';
import LeaderBoard from './LeaderboardComponent';
import "../styles/game.css"

function Game() {

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
          ? <div><Board level={level} goToNextLevel={goToNextLevel} /></div>
          : <div><LeaderBoard /></div>
      }
    </div>

  );
}

export default Game;
