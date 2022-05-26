import Navbar from '../../components/Navbar/Navbar-inLine'
import { useEffect, useState } from 'react'
import { client } from '../../client';

const Projects = () => {
  const [project, setProject] = useState([])

  useEffect(() => {
    const query = '*[_type == "projects"]';

    client.fetch(query).then((data) => {
      setProject(data);
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
          <p className='fw-light fs-6 mx-2 my-auto'>TAKE A LOOK AT MY</p>
        </div>
        <h1 className="mx-3">Projects</h1>
      </div>

      <div>
        {project.map((projects, index)=> (
          <div key = {`projects-${index}`} className="mx-5">
            <div className='mx-4 mt-4 hover d-flex justify-content-start'>
              <div className='w-100'>
                <h5>{projects.name}</h5>
                <div className='collapse' id={`projects-${index}`}>
                  <div class="card card-body mt-4">
                    <h6>{projects.name}</h6>
                    <p>
                      {projects.desc.map((object, i) => (
                        <ul>
                          <li key={`project-${i+i}`}>{object}</li>
                        </ul>
                      ))}
                    </p>
                  </div>
                  
                  </div>
                  
                  </div>
                  
                  <div className=''>
                    <button className='btn btn-outline-dark' data-bs-toggle="collapse" href={`#projects-${index}`} aria-expanded="false" aria-controls="collapseModal">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                      </svg>
                    </button>
                  </div>
              
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects