import logo from './logo.svg';
import './App.css';
import {About, Contact, Experience, Header, Projects} from './container'
import { useState } from 'react';


function App() {
  const [showExperience, setExperience] = useState(1)

  return (
    <div className="App">
      <Header/>
      <About/>
      <div id='proj-exp-selector'>
        <div class="d-grid gap-2 d-md-flex justify-content-md-center">
          <button class="btn btn-primary me-md-2" type="button">Work</button>
          <button class="btn btn-primary" type="button">Projects</button>
        </div>
      </div>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
