import {images} from '../../constants/index'
import Navbar from '../../components/Navbar/Navbar-inLine'

const About = () => {
  return (
    <div>
      <div style={{background: 'linear-gradient(45deg, #09081F 40%, #F38338 109.28%)'}} className='pb-3'>
        <Navbar/>
      </div>
      
      {/* Title for section */}
      <div className='container mx-5 mt-4'>
        <div className='d-flex'>
          {/* Width is a lot here */}
          <hr className='w-25 mx-4'></hr>
          <p className='fw-light fs-6 mx-2 my-auto'>SOME INFO</p>
        </div>
        <h1 className="mx-3">About Me</h1>
      </div>

      <div className='container d-flex gx-0'>
        <div className='col mt-3 gx-0'>
          <div id="slideshow" class="carousel slide" data-bs-ride="carousel">
            <div className='carousel-inner'>
              <div class="carousel-item active">
                <img src={images.DECA_1} height="500" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block bg-light text-dark opacity-75">
                  <h6 className='italic'>DECA Regionals 2018</h6>
                </div>
              </div>
              <div class="carousel-item">
                <img src={images.RYERSON_1} height="500" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block bg-light text-dark opacity-75">
                  <h6 className='italic'>Ellehacks 2020 - Attending a Cybersecurity Workshop</h6>
                </div>
              </div>
              <div class="carousel-item">
                <img src={images.PROGRAMMING_1} height="500" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block bg-light text-dark opacity-75">
                  <h6 className='italic'>Game of 'Simon Says' built on STM-32 Microprocessor</h6>
                </div>
              </div>
              <div class="carousel-item">
                <img src={images.ELLEHACKS_1} height="500" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block bg-light text-dark opacity-75">
                  <h6 className='italic'>Ellehacks 2020 - Welcome Event!</h6>
                </div>
              </div>
            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#slideshow" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#slideshow" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='col mx-5 mt-1'>
          <h1>Hello World!</h1>
          <p className='text-start'>
            My name is Prachee Nanda, and I'm a freshman studying Computer Engineering at University of Waterloo. I love solving problems! Whether it's finding the most elegant way to write a line of code or solving riveting sudoku puzzles, I love the challenge of finding a way and discovering solutions.
            <br/>
            <br/>
            My fascination with solving problems, combined with my competitive nature, has influenced me to participate in various public speaking competitions, math contests, business case presentations, and hackathons over the past few years. During these hackathons, I had the opportunity to deliver innovative solutions using software programming and engineering processes. The projects I developed always aimed to drive social impact with the goal of tackling some of the challenges in our current society.
            <br/>
            <br/>
            When I'm not coding or pushing pixels, you can find me obsessing over two-dimensional characters, sketching, gaming, or photography.
          </p>
          <hr/>
          <p style={{color: '#F38338'}}><b>Currently working at Farm Business Consultants as a Quality Assurance Technician 👩‍💻</b></p>
        </div>
      </div>
    </div>
  )
}

export default About