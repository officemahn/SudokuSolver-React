import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import logo2 from "../images/sudoku.gif"
import '../styles/home.css';

export var input

const Home = () => {
  useEffect(() => {
    document.title = "Sudoku Game";  
  }, []);

  const navigate = useNavigate();
  const handleClick = () => {
    if (validateForm()){
      navigate('/Game', {replace: true});
      getValue();
    }
  };

  function getValue(){
     input = document.getElementById("userName").value;
  }

  function validateForm() {
    var a = document.getElementById("userName").value;
    if (a == null || a === "") {
      alert("Please Fill out Name ");
      return false;
    }
    return true;
  }

   return (
    <div className="hero">
        <div className="main-text">
          <h1 className="title">Sudoku Twist</h1>
          <p className="subtitle"> Do you think you have what it takes to be on the hall of fame?</p > 
          <input type="text" id="userName" placeholder="Type in your name"/>
          <button className="game-on" onClick={handleClick}> Game On</button>
        </div>
        <img src={logo2} width ="500" alt="sudoku-main"/>
    </div>
  )
}

export default Home