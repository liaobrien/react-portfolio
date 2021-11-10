import React, { useEffect, useState } from "react";

const contactStyle = {
      maxWidth: '700px',
      margin: '0 auto'
}

export default function Contact() {
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [message, setMessage] = useState('');

      // entries are invalid by default until correct
      // const [validated] = useState(false);

      const handleInputChange = (event) => {
            const { name, value } = event.target;
            return name === "name" ? setName(value) : setEmail(value);
      }

      // function to compare email to regex
      // function validateEmail(email) {
      //       const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      //       return re.test(String(email).toLowerCase());
      // }

      const handleSubmit = (event) => {
            event.preventDefault();
            alert(`Message submitted successfully!`);


            setName('');
            setEmail('');
            setMessage('');

      }


      // WHEN I move my cursor out of one of the form fields without entering text
      // THEN I receive a notification that this field is required
      // WHEN I enter text into the email address field
      // THEN I receive a notification if I have entered an invalid email address



      return (
            <div className="contact mt-4" id="contact" style={contactStyle}>
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