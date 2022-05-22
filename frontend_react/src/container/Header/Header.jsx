import React from 'react'

const Header = () => {
  return (
    <div style={{background: 'linear-gradient(180deg, #09081F 40%, #F38338 109.28%)'}}>
      {/* Navbar with links to different parts of pages, single-page application */}
      <nav class="navbar navbar-expand-lg navbar-dark">
      <button class="navbar-toggler mx-4 mt-4" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse justify-content-center mt-4" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active mx-2">
              <a class="nav-link" href="/">HOME</a>
            </li>
            <li class="nav-item active mx-2">
              <a class="nav-link" href="/">ABOUT</a>
            </li>
            <li class="nav-item active mx-2">
              <a class="nav-link" href="/">EXPERIENCE</a>
            </li>
            <li class="nav-item active mx-2">
              <a class="nav-link" href="/">PROJECTS</a>
            </li>
            <li class="nav-item active mx-2">
              <a class="nav-link" href="/">CONTACT</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Has title, subtitle + social app bar */}
      <div className='container mt-5 pt-5 d-flex justify-content-center align-items-center flex-column'>
        <h1 className = 'pt-5 mt-5 text-light' style={{fontSize: '4rem'}}>Prachee Nanda</h1>
        {/* Set different width for smaller screens */}
        <p className='w-50 text-center font-weight-light text-light strong mt-4' style={{fontSize: '1.1rem'}}>I’m a full-stack web developer, UI/UX designer and an ardent, lifelong learner who is always creating and learning awesome stuff. Let’s start scrolling and learn more about me!</p>
        {/* Horizontal line not showing up */}
        <hr className = 'border-5 text-white'/>
        <div className='text-light container d-flex justify-content-center align-items-center' style={{marginBottom: '15rem'}}>
          <i className="bi bi-envelope mx-3" style={{fontSize: '32px'}}></i>
          <i className="bi bi-github mx-3" style={{fontSize: '32px'}}></i>
          <i className="bi bi-linkedin mx-3" style={{fontSize: '32px'}}></i>
          <i className="bi bi-instagram mx-3" style={{fontSize: '32px'}}></i>
        </div>
        
      </div>
    </div>
  )
}

export default Header