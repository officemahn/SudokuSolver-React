import React from 'react'
import '../styles/rules.css'

const Rules = () => {
  return (
    <div className="rules">
      <h2 className="rulesTitle">HOW TO PLAY SODUKU TWIST</h2>
      <ul className="rules-list">
        <li>Select A Cell</li>
        <li>Select Number to Place on Cell</li>
        <li>Do Not Repeat Any Numbers</li>
        <li>Do Not Guess</li>
        <li>Use Process of Elimination</li>
        <li>The Game is won when each cell contains a number that is unique to the row and column</li>

      </ul>
    </div>
  )
}

export default Rules