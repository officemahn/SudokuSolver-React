import './App.css';
import Board from './components/boardComponent';
import {loadBoard} from "./services/boardService";
import React, { useState } from 'react';
import { Game } from './entities/game';

function App() {

  let game = new Game(1, 0);
  const [level, setLevel] = useState(game._level);

  return (
    <div>
      <div>{level}</div>
      <div><Board level={level}/></div>
    </div>

  );
}

export default App;
