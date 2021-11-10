import React, { useEffect, useState } from "react";
import { validateEmail } from "../../utils/helpers";

const contactStyle = {
      maxWidth: '700px',
      margin: '0 auto'
}

export default function Contact() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');

      const handleInputChange = (event) => {
            const { name, value } = event.target;
            if (name === "name") {
                  setName(value);
            } else if (name === "email") {
                  setEmail(value);
            } else if (name === "message") {
                  setMessage(value);
            }
      }


      const handleSubmit = (event) => {
            event.preventDefault();

            if (!validateEmail(email)) {
                  alert('Email is invalid. Please enter a valid email address.');
                  // We want to exit out of this code block if something is wrong so that the user can correct it
                  return;
            }
            if (name === "" || email === "" || message === "") {
                  alert("Please fill out required fields.");
                  return;
            }

            alert(`Thanks for your message, ${name}! I'll get back to you soon.`)

            setName('');
            setEmail('');
            setMessage('');

      }


      return (
            <div className="contact mt-4" id="contact" style={contactStyle}>
                  <h2 className="text-center">Have a question? Send me a message!</h2>
                  <form>
                        <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input onChange={handleInputChange} type="text" name="name" value={name} className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                              <label htmlFor="email">Email Address</label>
                              <input onChange={handleInputChange} type="email" name="email" value={email} className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                              <label htmlFor="message">Message</label>
                              <textarea onChange={handleInputChange} rows="3" type="text" name="message" value={message} className="form-control" id="message" />
                        </div>
                        <button type="submit" className="btn btn-dark" onClick={handleSubmit}>Submit</button>
                  </form>
            </div>
      )
}