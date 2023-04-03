import React from 'react'
import Navigation from './Navigation'


/* ToDo:
    - Clean up with Bootstrap and CSS
*/


const Header = (props) => {

  const { setCurrentPage, currentPage } = props

  return (
    <div class="navbar navbar-expand-lg navbar-light bg-light">
      <h1 class="mx-3">Jesse Jiang</h1>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          </ul>
          <Navigation setCurrentPage = {setCurrentPage} currentPage = {currentPage}/>
        </div>
    </div>
  )
}

export default Header