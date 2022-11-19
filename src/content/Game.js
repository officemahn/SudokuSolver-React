import React from 'react'
import './Game.css';

const board = [
  [-1, 5, -1, 9, -1, -1, -1, -1, -1],
  [8, -1, -1, -1, 4, -1, 3, -1, 7],
  [-1, -1, -1, 2, 8, -1, 1, 9, -1],
  [5, 3, 8, 6, -1, 7, 9, 4, -1],
  [-1, 2, -1, 3, -1, 1, -1, -1, -1],
  [1, -1, 9, 8, -1, 4, 6, 2, 3],
  [9, -1, 7, 4, -1, -1, -1, -1, -1],
  [-1, 4, 5, -1, -1, -1, 2, -1, 9],
  [-1, -1, -1, -1, 3, -1, -1, 7, -1],
]
const Game = () => {
  return (
    <div className="Game">
      <div className="Game-header">
        <h3>Sudoku Twist</h3>
        <table>
          <tbody>
            {
              [0, 1, 2, 3, 4, 5, 6, 7, 8].map((row, rIndex)=>{
                return <tr key={rIndex}>
                  {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((col, cIndex)=>{
                    return <td key={rIndex + cIndex}>
                      <input type="text" className="cellInput" />
                    </td>
                  })}

                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Game
