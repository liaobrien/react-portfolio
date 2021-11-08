import React from "react";

const projects = [
      {
            title: 'Decked Out',
            github: 'Decked-Out',
            deploy: 'https://hidden-island-92263.herokuapp.com/'
      },
      {
            title: 'Pack Rat',
            github: 'Pack-Rat',
            deploy: 'https://liaobrien.github.io/Pack-Rat/'
      },
      {
            title: 'Tech Blog',
            github: 'tech-blog',
            deploy: 'https://fast-chamber-00133.herokuapp.com/'
      },
      {
            title: 'Weather Dashboard',
            github: 'weather-dashboard',
            deploy: 'https://liaobrien.github.io/weather-dashboard'
      },
      {
            title: 'Budget Tracker',
            github: 'offline-budget-tracker',
            deploy: 'https://hidden-badlands-92774.herokuapp.com/'
      },
      {
            title: 'Express Note Taker',
            github: 'note-taker',
            deploy: 'https://pacific-hamlet-03759.herokuapp.com/'
      }
]

export default function Project() {
      return (
            <div className="row justify-content-center mb-4">
                  {
                        projects.map((project) => (
                              <div className="card col-lg-3 m-3">
                                    <img
                                          src="./assets/images/pack-rat.png"
                                          className="card-img-top"
                                          alt="screenshot"
                                    />
                                    <div className="card-body">
                                          <h5 className="card-title">{project.title}</h5>
                                          <a
                                                href={project.deploy}
                                                className="btn"
                                                target="_blank"
                                                rel="noreferrer"
                                          >Deployed</a>
                                          <a
                                                href="https://github.com/liaobrien/{project.github}"
                                                className="btn"
                                                target="_blank"
                                                rel="noreferrer"
                                          >GitHub</a>
                                    </div>
                              </div>
                        ))
                  }
            </div>
      )
}