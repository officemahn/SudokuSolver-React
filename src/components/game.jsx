import Board from './boardComponent';
import LeaderBoard from './LeaderboardComponent';
import "../styles/game.css"
import congrats from "../images/celebration.gif"
import React, { useState, useEffect } from 'react'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import awsconfig from '../aws-exports'
import { createUsers } from '../graphql/mutations';
import { v4 as uuidv4  } from 'uuid';
import {input} from './home'
Amplify.configure(awsconfig)


function winPopUp(){
  return(
    <div class="popup" id="popup">
      <img src={congrats} alt="" />
      <h2>Congratulations</h2>
      <p>You made it to the hall of fame</p>
      <button onClick={closePopup}>Okay</button>
    </div>
  )
}

// function losePopUp(){
//   return(
//     <div class="popup" id="popup">
//       <img src={congrats} alt="" />
//       <h2>Too Bad</h2>
//       <p>You could not make it to the hall of fame</p>
//       <button onClick={closePopup}>Okay</button>
//     </div>
//   )
// }

function closePopup(){
  document.getElementById("popup").style.display = 'none';
}

const winMessage = winPopUp();
// const loseMessage = losePopUp();

function Game() {
  useEffect(() => {
    addUser();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const createNewUser={
    id: uuidv4(),
    name: input,
    score: 5000
  }
  const addUser = async () => {
    try {
      await API.graphql(graphqlOperation(createUsers, {input: createNewUser}));
    } catch (error) {
      console.log('error on adding user', error);
    } 
  }

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
          : <div>
              <div>{winMessage}</div>
              {/* <div>{addUser}</div> */}
              <LeaderBoard />
            </div>
      }
    </div>

  );
}

export default Game;
