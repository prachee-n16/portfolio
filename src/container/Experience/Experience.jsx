import Navbar from '../../components/Navbar/Navbar-inLine'
import { useEffect, useState } from 'react'
import { client } from '../../client';
import './Experience.css'

const Experience = () => {
  const [work, setWork] = useState([])

  useEffect(() => {
    const query = '*[_type == "work"]';

    client.fetch(query).then((data) => {
      setWork(data);
    });
  }, []);

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
          <p className='fw-light fs-6 mx-2 my-auto'>CHECK OUT MY</p>
        </div>
        <h1 className="mx-3">Work</h1>
      </div>

      <div>
        {work.map((job, index) => (
          <div key = {`job-${index}`} className="mx-5">
            <div className='mx-4 mt-4 hover d-flex justify-content-start'>
              <div className='w-100'>
                <h4>{job.role}</h4>
                <h6>{job.title}</h6>

              <div className='collapse' id={`job-${job.id}`}>
                <div class="card card-body mt-4">
                  <h6>{job.role} | {job.title}</h6>
                  <p>{job.duration}</p>
                  <p>{job.details}</p>
                  <h6>Description: </h6>
                  <p>
                    {job.experience.map((work, item) => (
                      <div key={`experience-${item}`}>
                        <ul>
                          {work.desc.map((object, i) => <li key={i}> {object} </li>)}
                        </ul>
                      </div>
                    ))}
                  </p>
                </div>
              </div>
              <hr></hr>
              </div>

              <div className=''>
                <button className='btn btn-outline-dark' data-bs-toggle="collapse" href={`#job-${job.id}`} aria-expanded="false" aria-controls="collapseModal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                  </svg>
                </button>
              </div>
              
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience