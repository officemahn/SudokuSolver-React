import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/about';
import Home from './components/home';
import Rules from './components/rules';
import NavBar from './components/navbar';
import Game from './components/game';
import LeaderBoard from './components/leaderboardComponent';


const App = () => {
  useEffect(() => {
    document.title = "Sudoku Game";
  }, []);

  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Rules" element={<Rules />} />
          <Route exact path="/Game" element={<Game />} />
          <Route exact path="/LeaderBoard" element={<LeaderBoard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;