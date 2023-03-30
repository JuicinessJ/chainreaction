import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Footer from './components/Footer';


function App() {


const [ currentPage, setCurrentPage ] = useState('Project') // Defaults page to Project, can be changed to anything else.


  return (
    <div className="App">
      <div>
        <Header setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
      </div>

      {/* If true displays Project if false displays AboutMe */}
      { currentPage === 'Project' 
        ? (
            <Project />
          )
        : (
            <AboutMe />
          )
      }

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;