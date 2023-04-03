import React from 'react'


// Responsible for creating the Nav Buttons to re-direct to different pages such as Portfolio, About Me, Projects and etcs.
// May need to introduce onClicks function inside here for redirect.


const Navigation = (props) => {

  const { setCurrentPage, currentPage } = props;

  return (
    <ul class="navbar-nav">
      <li class="nav-item mx-3">
        <h5>
          <a href='#Projects' onClick={() => setCurrentPage('Project')} className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </a>
        </h5>
      </li>
      <li class="nav-item mx-3">
        <h5>
          <a href='#AboutMe' onClick={() => setCurrentPage('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
            About
          </a>
        </h5>
      </li>
      <li class="nav-item mx-3">
        <h5>
          <a href='#Contact' onClick={() => setCurrentPage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </a>
        </h5>
      </li>
      <li class="nav-item mx-3">
        <h5>
          {/* insert link to resume or move this inside about me*/}
          <a href="http://google.com" className='nav-link'>
            Resume
          </a>
        </h5>
      </li>
    </ul>
  );
}

export default Navigation;