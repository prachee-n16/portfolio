import logo from './logo.svg';
import './App.css';
import {About, Resume, Experience, Header, Projects} from './container'
import {Routes, Route, BrowserRouter } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/portfolio' element={<Header/>} />
          <Route path='/' element={<Header/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/work' element={<Experience/>} />
          <Route path='/projects' element={<Projects/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
