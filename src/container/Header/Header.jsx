import Navbar from "../../components/Navbar/Navbar"
const Header = () => {
  return (
    <div className="vh-100" style={{background: 'linear-gradient(180deg, #09081F 40%, #F38338 109.28%)', overflowY: "hidden"}}>
      {/* Navbar with links to different parts of pages, single-page application */}
      <Navbar/>

      {/* Has title, subtitle + social app bar */}
      <div className='container mt-5 pt-5 d-flex justify-content-center align-items-center flex-column'>
        <h1 className = 'pt-5 mt-5 text-light' style={{fontSize: '4rem'}}>Prachee Nanda</h1>
        {/* Set different width for smaller screens */}
        <p className='w-50 text-center font-weight-light text-light strong mt-4' style={{fontSize: '1.1rem'}}>I’m a full-stack web developer, UI/UX designer and an ardent, lifelong learner who is always creating and learning awesome stuff. Let’s start scrolling and learn more about me!</p>
        {/* Horizontal line not showing up */}
        <hr className = 'border-5 text-white'/>
        <div className='text-light container d-flex justify-content-center align-items-center' style={{marginBottom: '15rem'}}>
          <a style={{color: 'white'}}><i className="bi bi-envelope mx-3" style={{fontSize: '32px'}}></i></a>
          <a style={{color: 'white'}} href='https://github.com/prachee-n16'><i className="bi bi-github mx-3" style={{fontSize: '32px'}}></i></a>
          <a style={{color: 'white'}} href='https://www.linkedin.com/in/pracheenanda/'><i className="bi bi-linkedin mx-3" style={{fontSize: '32px'}}></i></a>
          <a style={{color: 'white'}} href='https://www.instagram.com/pracheenanda/'><i className="bi bi-instagram mx-3" style={{fontSize: '32px'}}></i></a>
        </div>
        
      </div>
    </div>
  )
}

export default Header