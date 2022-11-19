import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">Sudoku Twist</Link>
      <ul>
        <li><Link to="/LeaderBoard">HALL OF FAME</Link></li>
        <li><Link to="/Rules">HOW TO PLAY</Link></li>
        <li><Link to="/About">ABOUT</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar