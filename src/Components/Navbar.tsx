import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul style={{ paddingInlineStart: '0' }}>
        <li>
          <Link to="/">Tv Shows</Link>
        </li>

        <li>
          <Link to="/movies">Movies</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
