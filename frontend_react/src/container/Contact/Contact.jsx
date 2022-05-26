import React from 'react'
import Navbar from '../../components/Navbar/Navbar-inLine'

const Contact = () => {
  return (
    <div>
      <div style={{background: 'linear-gradient(45deg, #09081F 40%, #F38338 109.28%)'}} className='pb-3'>
        <Navbar/>
      </div>

      {/* Title for section */}
      <div className='container mx-5 mt-4 mb-5'>
        <div className='d-flex'>
          {/* Width is a lot here */}
          <hr className='w-25 mx-3'></hr>
          <p className='fw-light fs-6 mx-2 my-auto'>GET IN TOUCH</p>
        </div>
        <h1 className="mx-3">CONTACT</h1>
      </div>

      <div className='container g-0'>
        <div className='row g-0'>
          <div className='col g-0'>
            <h2></h2>

            <div className='container g-0'>
            <div className='row'>
              <div className='col g-0'>
                <div className='d-flex'>
                  <i className="bi bi-geo mx-3" style={{fontSize: '32px'}}></i> 
                  <div>
                    <h6 className=''>Based in</h6>
                    <p>Waterloo, ON</p>
                  </div>
                </div>

                <div className='d-flex mt-3'>
                  <i className="bi bi-envelope mx-3" style={{fontSize: '32px'}}></i> 
                  <div>
                    <h6 className=''>Email</h6>
                    <p>p4nanda@uwaterloo.ca</p>
                  </div>
                </div>
              </div>

              <div className='col g-0'>
                <div className='d-flex'>
                  <i className="bi bi-github mx-3" style={{fontSize: '32px'}}></i> 
                  <div>
                    <h6 className=''>Github Account</h6>
                    <p>/prachee-n16</p>
                  </div>
                </div>

                <div className='d-flex mt-3'>
                  <i className="bi bi-linkedin mx-3" style={{fontSize: '32px'}}></i> 
                  <div>
                    <h6 className=''>Linkedin Account</h6>
                    <p>/in/pracheenanda/</p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div className='col'>
            <form>
            <div class="form-group">
                <label for="name" className=''>Full Name:</label>
                <input type="name" class=" form-control mt-2" id="name" placeholder="First & Last Name"/>
              </div>
              <div class="form-group mt-4">
                <label for="email" className=''>Email address</label>
                <input type="email" class=" form-control mt-2" id="email" placeholder="name@example.com"/>
              </div>
              <div class="form-group mt-4">
                <label for="message" className=''>Your message:</label>
                <textarea class="form-control mt-2" id="message" rows="3"></textarea>
              </div>
              <button type="submit" class="btn btn-primary mt-4">Sign in</button>
            </form>
          </div>
        </div>
      </div>
      

    </div>
  )
}

export default Contact