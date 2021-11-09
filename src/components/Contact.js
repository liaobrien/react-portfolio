import React from "react";

export default function Contact() {
      return (
            <div className="contact m-5" id="contact">
                  <form>
                        <div className="form-group">
                              <label for="name">Name</label>
                              <input type="name" class="form-control" id="name" />
                        </div>
                        <div className="form-group">
                              <label for="email">Email Address</label>
                              <input type="email" class="form-control" id="email" />
                        </div>
                        <div className="form-group">
                              <label for="email">Message</label>
                              <textarea rows="3" type="email" class="form-control" id="email" />
                        </div>
                        <button type="submit" className="btn btn-dark">Submit</button>
                  </form>
            </div>
      )
}