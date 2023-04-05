import React, { useState } from 'react'


/* ToDo:
    - Need to add a form submit feature where after taking value from the name email and message box
    it'll log them with an id and store them inside a database. 
    For reference: BuckerForm and maybe Bucket28-MiniProject 
*/

function Contact() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');

    const validate = (e) => {
        const inputType = e.target.name;
        const inputValue = e.target.value;

        if (inputType === 'name') {
            if (inputValue.length === 0) {
                setResponse('Name is not Valid!');
            } else {
                setResponse ('');
            }
        }

        // if (inputType === 'email') {
        //     if (need to verify if email fits the criteria) {
                    // setResponse('Email is not valid');
        //     } else {
                    // setResponse('');
        // }
        // }

        if (inputType === 'message') {
            if (inputValue.length === 0) {
                setResponse('There is nothing inside the text box!');
            } else {
                setResponse('');
            }
        }
    }


    return (
        <div>
            <h4>Contact</h4>
            <div class="input-group mb-3 w-25">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Name</span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" name="name" onBlur={validate}></input>
            </div>
            <div class="input-group mb-3 w-25">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Email</span>
                </div>
                <input type="text" class="form-control" aria-label="Sizing example input" name="email" onBlur={validate}></input>
            </div>
            <div class="input-group mb-3 w-25">
                <div class="input-group-prepend">
                    <span class="input-group-text">Message</span>
                </div>
                <textarea class="form-control" aria-label="With textarea" name="message" onBlur={validate}></textarea>
            </div>
            <p id='responseText'>{response}</p>
        </div>
    )
}

export default Contact