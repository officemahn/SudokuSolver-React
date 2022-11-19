import React, {useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './content/About';
import Home from './content/Home';
import Rules from './content/Rules';
import NavBar from "./content/NavBar";
import Game from './content/Game';
import LeaderBoard from './content/LeaderBoard'


const App = () => {
  useEffect(() => {
    document.title = "Sudoku Game";  
  }, []);

  return (
    <Router>
      <div className="app">
        <NavBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Rules" element={<Rules />} />
          <Route exact path="/Game" element={<Game/>} />
          <Route exact path="/LeaderBoard" element={<LeaderBoard/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;