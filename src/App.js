import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';


/* ToDos:
    - Need to make this responsive for mobile
*/


function App() {


const [ currentPage, setCurrentPage ] = useState('Project') // Defaults page to Project, can be changed to anything else.


  return (
    <div className="App">
      <div id='header'>
        <Header setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
      </div>
      <div class="p-5" id='content'>
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