import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App() {


const [ currentPage, setCurrentPage ] = useState('Project') // Defaults page to Project, can be changed to anything else.


  return (
    <div className="App" class="container-fluid">
      <div>
        <Header setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
      </div>
      <div class="p-5">
      { currentPage === 'Project'
        ? (
            <Project />
          )
        : currentPage === 'Contact'
        ? (
            <Contact />
          )
        : currentPage === 'Resume'
        ? (
            <Resume />
          )
        : (
            <AboutMe />
          )
      }
      </div>
      <div class="fixed-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default App;