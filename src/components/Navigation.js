import React from 'react'


/* ToDo:
    - Make Responsive
*/

const Navigation = (props) => {

  const { setCurrentPage, currentPage } = props;

  return (
    <ul class="navbar-nav">
      <li class="nav-item mx-4">
        <h5>
          <a href='#Projects' onClick={() => setCurrentPage('Project')} className={currentPage === 'Project' ? 'nav-link active' : 'nav-link'}>
            Portfolio
          </a>
        </h5>
      </li>
      <li class="nav-item mx-4">
        <h5>
          <a href='#AboutMe' onClick={() => setCurrentPage('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
            About
          </a>
        </h5>
      </li>
      <li class="nav-item mx-4">
        <h5>
          <a href='#Contact' onClick={() => setCurrentPage('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
            Contact
          </a>
        </h5>
      </li>
      <li class="nav-item mx-4">
        <h5>
          <a href='#Resume' onClick={() => setCurrentPage('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
            Resume
          </a>
        </h5>
      </li>
    </ul>
  );
}

export default Navigation;