import React from "react";
import headshot from '../../assets/images/headshot-min.jpg'

export default function About() {
      return (
            <div id="about-me" className="container justify-content-center my-5">
                  <img src={headshot} id="headshot" className="mx-auto mb-5 d-block" alt="headshot" />
                  <div>
                        <h2 className="text-center">About Me</h2>
                        <p className="text-center">My name is Lia, and I'm a full stack web developer from Newark, Delaware with a special interest in frontend development. I earned by bachelor's degree in Media Communication from the University of Delaware in 2021, and during my studies I spent most of my time working as a news reporter and producer for my school's TV station. My interest in coding began when I took a computer science class my last semester of college, as I was looking to be challenged more technically. From that point, I fell in love with programming as it combined my two favorite things: creativity and problem solving! I now have a certificate in Full Stack Web Development from the University of Pennsylvania Coding Bootcamp, and I'm excited to start my career in this ever-changing field.</p>
                        <h2 className="text-center">Skills</h2>
                        <div className="row">
                              <div className="col-lg-4 col-sm-12">
                                    <h3 className="text-center">Languages</h3>
                                    <ul>
                                          <li>HTML5</li>
                                          <li>CSS3</li>
                                          <li>JavaScript ES6</li>
                                          <li>SQL</li>
                                          <li>NoSQL</li>
                                    </ul>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                    <h3 className="text-center">Applications</h3>
                                    <ul>
                                          <li>Git</li>
                                          <li>GitHub</li>
                                          <li>MySQL</li>
                                          <li>MongoDB</li>
                                    </ul>
                              </div>
                              <div className="col-lg-4 col-sm-12">
                                    <h3 className="text-center">Tools</h3>
                                    <ul className="skill-lists">
                                          <li>React</li>
                                          <li>Bootstrap</li>
                                          <li>Bulma</li>
                                          <li>jQuery</li>
                                          <li>Handlebars</li>
                                          <li>Node.JS</li>
                                          <li>Express</li>
                                          <li>Sequelize</li>
                                          <li>Mongoose</li>
                                          <li>REST API</li>
                                          <li>GraphQL</li>
                                    </ul>
                              </div>
                        </div>
                  </div>
            </div>
      )
}