import React from 'react'
import Navigation from './Navigation'


/* ToDo:
    - Clean up with Bootstrap and CSS
*/


const Header = (props) => {

  const { setCurrentPage, currentPage } = props

  return (
    <div class="navbar navbar-expand-lg navbar-light">
      <h1 class="ml-4">Jesse Jiang</h1>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
          <Navigation setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
        </div>
    </div>
  )
}

export default Header