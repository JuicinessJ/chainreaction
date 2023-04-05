import React from 'react'
import img from './images/IMG_4202.JPG'


/* ToDo:
    - Add Fluff and Image
*/


const AboutMe = () => {

  return (
    <div class="d-flex">
      <img src={img} class="w-25 rounded-lg border"></img>
      <div class="card ml-4 rounded-lg" id='aboutText'>
        <div class="card-header">
          About Me!
        </div>
        <div>
          <div class="card-body">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default AboutMe