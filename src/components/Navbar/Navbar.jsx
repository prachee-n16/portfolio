import React from 'react'
import { Link } from 'react-router-dom'
import resume from '../../assets/Prachee_Nanda_Resume.pdf'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <button class="navbar-toggler mx-4" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active mx-2">
                <Link to="/portfolio">
                    <a class="nav-link" href="/">HOME</a>
                </Link>
            </li>
            <li class="nav-item active mx-2">
                <Link to="/about">
                    <a class="nav-link" href="/">ABOUT</a>
                </Link>
            </li>
            <li class="nav-item active mx-2">
                <Link to="/work">
                    <a class="nav-link" href="/">WORK</a>
                </Link>
            </li>
            <li class="nav-item active mx-2">
                <Link to="/projects">
                    <a class="nav-link" href="/">PROJECTS</a>
                </Link>
            </li>
            <li class="nav-item active mx-2">
              <a class="nav-link" target="_blank" href={resume}>RESUME</a>
            </li>
          </ul>
        </div>
      </nav>
  )
}

export default Navbar