import React from 'react'


/* ToDo:
    - Need to add value inside can either add something inside the onClick to change them into an anchor to
    redirect them to different projects inside my github
    - Add two links inside each card to direct to github link and deployed link
*/


const Project = () => {
  return (
    <div>
      <h3>My Projects</h3>
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <img></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <img></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <img></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <img></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <img></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col mb-4" onClick={() => {}}>
          <div class="card h-100">
            <img></img>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project