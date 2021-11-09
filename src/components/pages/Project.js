import React from "react";

const projects = [
      {
            id: 1,
            title: 'Decked Out',
            image: './assets/images/decked-out.png',
            deploy: 'https://hidden-island-92263.herokuapp.com/'
      },
      {
            id: 2,
            title: 'Pack Rat',
            image: './assets/images/pack-rat.png',
            deploy: 'https://liaobrien.github.io/Pack-Rat/'
      },
      {
            id: 3,
            title: 'Tech Blog',
            image: './assets/images/tech-blog.png',
            deploy: 'https://fast-chamber-00133.herokuapp.com/'
      },
      {
            id: 4,
            title: 'Weather Dashboard',
            image: './assets/images/weather-dashboard.png',
            deploy: 'https://liaobrien.github.io/weather-dashboard'
      },
      {
            id: 5,
            title: 'Budget Tracker',
            image: './assets/images/budget-tracker.png',
            deploy: 'https://hidden-badlands-92774.herokuapp.com/'
      },
      {
            id: 6,
            title: 'Express Note Taker',
            image: './assets/images/note-taker.png',
            deploy: 'https://pacific-hamlet-03759.herokuapp.com/'
      }
]

export default function Project() {
      return (
            <section className="container" id="work">
                  <div className="row justify-content-center my-4">
                        {
                              projects.map((project) => (
                                    <div className="card p-0 col-lg-3 m-3">
                                          <img
                                                src={project.image}
                                                className="card-img-top"
                                                alt="screenshot"
                                          />
                                          <div className="card-body">
                                                <h5 className="card-title">{project.title}</h5>
                                                <a
                                                      href={project.deploy}
                                                      className="btn link"
                                                      target="_blank"
                                                      rel="noreferrer"
                                                >Deployed</a>
                                                <a
                                                      href="https://github.com/liaobrien/{project.github}"
                                                      className="btn link"
                                                      target="_blank"
                                                      rel="noreferrer"
                                                >GitHub</a>
                                          </div>
                                    </div>
                              ))
                        }
                  </div>
            </section>
      )
}