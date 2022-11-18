import React, {useEffect} from 'react'
import logo2 from './images/sudoku.gif'

function App() {
  useEffect(() => {
    document.title = "Sudoku Game";  
  }, []);

  return (
    <div>
      
      <section>
        <header>
          <img src="./images/logo.png" width="100" alt="logo" />
          <div>
            <ul>
              <li>HOME</li>
              <li>RULES</li>
              <li>ABOUT</li>

            </ul>
          </div>
        </header>
      </section>

      <section id="main">
        <div className="main-text">
          <h1 className="title">Sudoku Twist</h1>
          <p className="subtitle"> Do you think you have what it takes to be on the hall of fame?</p > 
          <input type="text" id="userName" placeholder="Type in your name" />
          <button> Game On</button>
        </div>

        <img src={logo2} width ="500" alt="sudoku-main"/>
      </section>
    </div>
  )
}

export default App