import React from "react";

const contactStyle = {
      maxWidth: '700px',
      margin: '0 auto'
}

export default function Contact() {
      return (
            <div className="contact mt-4" id="contact" style={contactStyle}>
                  <form>
                        <div className="form-group">
                              <label htmlFor="name">Name</label>
                              <input type="name" className="form-control" id="name" />
                        </div>
                        <div className="form-group">
                              <label htmlFor="email">Email Address</label>
                              <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="form-group">
                              <label htmlFor="email">Message</label>
                              <textarea rows="3" type="email" className="form-control" id="email" />
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                  </form>
            </div>
      )
}