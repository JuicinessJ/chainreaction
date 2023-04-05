import React from 'react'
import github from './images/25231.png'
import linkedin from './images/linkedin-icon.png'


/* ToDo:
    - Make Responsive
*/


const Footer = () => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3 offset-md-5">
          <a href='https://github.com/JuicinessJ'><img src={github} class="w-25" id='github'></img></a>
          <a href='https://github.com/JuicinessJ'><img src={linkedin} class="w-25" id='linkedin'></img></a>
        </div>
      </div>
    </div>
  )
}

export default Footer