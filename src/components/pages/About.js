import React from "react";
import headshot from '../../assets/images/headshot-min.jpg'

export default function About() {
      return (
            <div id="about-me" className="container justify-content-center my-5">
                  <img src={headshot} id="headshot" className="mx-auto mb-5 d-block" alt="headshot" />
                  <div>
                        <h2 className="text-center">Hi, I'm Lia.</h2>
                        <p className="text-center">I'm a full stack web developer from Newark, Delaware with a professional background in journalism. I have a Bachelor of Arts in Media Communication from the University of Delaware, but my interest in coding began when I took a computer science class my last semester of college. From that point, I fell in love with programming as it combined my two favorite things: creativity and problem solving! Currently I am working towards a certificate in Full Stack Web Development at the University of Pennsylvania, and I can't wait to start working in the tech field after my graduation in November 2021.</p>
                  </div>
            </div>
      )
}