import React from 'react'

function NavBarre() {
  return (
    <div>
        <nav className="navbar">
            <div className="logo">
                <p>Logo</p>
            </div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/add-movies">Add Movies</a></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default NavBarre
