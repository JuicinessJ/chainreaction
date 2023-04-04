import React from 'react'


/* ToDo:
    - Need to add value inside can either add something inside the onClick to change them into an anchor to
    redirect them to different projects inside my github
    - Add two links inside each card to direct to github link and deployed link
    - Need to display Title, Link and what it include
*/


const Project = () => {
  return (
    <div>
      <h3>My Projects</h3>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Marvel Directory</h5>
              <p class="card-text">HTML & JavaScript (API)</p>
              <ul>
                <li><a href='https://akshatha2022.github.io/MarvelDirectory/'>Deployed</a></li>
                <li><a href='https://github.com/Akshatha2022/MarvelDirectory'>GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">The Reviewer</h5>
              <p class="card-text">JavaScript (Express and Node), MySQL & Sequelize, and HandleBars </p>
              <ul>
                <li><a href='https://peaceful-plateau-13571.herokuapp.com/'>Deployed</a></li>
                <li><a href='https://github.com/JLEAR749/reelzgoodreviews'>GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">JesseGarfield</h5>
              <p class="card-text">MVC and MongoDB & Mongoose</p>
              <ul>
                <li><a href='https://github.com/JuicinessJ/JesseGarfield'>GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Oznah</h5>
              <p class="card-text">ORM, MySQL & Sequelize</p>
              <ul>
                <li><a href='https://github.com/JuicinessJ/oznah'>GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Hanzo's Employees</h5>
              <p class="card-text">JavaScript with Inquirer & MySQL</p>
              <ul>
                <li><a href='https://github.com/JuicinessJ/hanzo-employees'>GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Hanzo's Diary</h5>
              <p class="card-text">JavaScript (API & Express)</p>
              <ul>
                <li><a href='https://blooming-stream-24039.herokuapp.com/'>Deployed</a></li>
                <li><a href='https://github.com/JuicinessJ/hanzodiary'>GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project