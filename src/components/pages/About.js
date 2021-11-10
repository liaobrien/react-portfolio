import React from "react";
import headshot from '../../assets/images/headshot-min.jpg'

export default function About() {
      return (
            <div id="about-me" className="d-flex container justify-content-center align-items-center my-5">
                  <img src={headshot} id="headshot" className="mx-3" alt="headshot" />
                  <div>
                        <h2>About Me</h2>
                        <p>I'm a full stack web developer from Newark, Delaware. Shortly before
                              graduating from the University of Delaware with my bachelor's degree in
                              Media Communication, I realized I wanted to be more technically
                              challenged in my work. After taking a computer science class on a whim
                              my last semester, I fell in love with coding and knew it was something I
                              wanted to pursue further. Currently I'm working toward a certificate in
                              Full Stack Web Development from the University of Pennsylvania, and I
                              plan to look for a full-time position in web development after
                              graduation.</p>
                  </div>
            </div>
      )
}