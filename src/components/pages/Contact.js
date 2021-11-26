import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import emailjs from "emailjs-com";

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
      };

      const sendEmail = (event) => {
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

            emailjs.sendForm('gmail', 'template_qx5rsjl', event.target, 'user_Ikap7VQi7UD4nPmTt8ZhY')
                  .then((result) => {
                        console.log(result.text);
                  }, (error) => {
                        console.log(error.text);
                  });
      };


      return (
            <div className="contact mt-4" id="contact" style={contactStyle}>
                  <h2 className="text-center">Reach out to me professionally:</h2>
                  <div className="contact-links">
                        <i className="contact-bi bi-envelope"></i>
                        <a href="mailto:liaobrien123@gmail.com"><p>liaobrien123@gmail.com</p></a>
                  </div>
                  <div className="contact-links">
                        <i className="contact-bi bi-linkedin"></i>
                        <a href="https://www.linkedin.com/in/lia-obrien"><p>linkedin.com/in/lia-obrien</p></a>
                  </div>
                  <br />
                  <h2 className="text-center">You can also fill out this contact form, and I'll get back to you as soon as possible!</h2>
                  <br />
                  <form onSubmit={sendEmail}>
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
                        <br />
                        <button type="submit" className="btn btn-dark">Submit</button>
                  </form>
            </div>
      )
}