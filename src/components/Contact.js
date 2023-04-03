import React from 'react'


/* ToDo:
    - Need to add a form submit feature where after taking value from the name email and message box
    it'll log them with an id and store them inside a database. 
    For reference: BuckerForm and maybe Bucket28-MiniProject 
*/

function Contact() {
  return (
    <div>
        <h4>Contact</h4>
        <div class="input-group mb-3 w-25">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
            </div>
            <input type="text" class="form-control" aria-label="Sizing example input"></input>
        </div>
        <div class="input-group mb-3 w-25">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
            </div>
            <input type="text" class="form-control" aria-label="Sizing example input"></input>
        </div>
        <div class="input-group mb-3 w-25">
            <div class="input-group-prepend">
                <span class="input-group-text">Message</span>
            </div>
            <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
    </div>
  )
}

export default Contact