import React from 'react'
import github from './images/GitHub-Mark.png'
import linkedin from './images/linkedin-icon.png'


/* ToDo:
    - Add Linkedin, Github and etc buttons and images
*/


const Footer = () => {
  return (
    <div class="d-flex justify-content-center">
        <a href='https://github.com/JuicinessJ'><img src={github} class="w-25"></img></a>
        <a href='https://github.com/JuicinessJ'><img src={linkedin} class="w-25"></img></a>
    </div>
  )
}

export default Footer