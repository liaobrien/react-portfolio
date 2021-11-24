import React from "react";
import DeckedOut from '../../assets/images/decked-out.png';
import PackRat from '../../assets/images/pack-rat.png';
import TechBlog from '../../assets/images/tech-blog.png';
import WeatherDash from '../../assets/images/weather-dashboard.png';
import BudgetTracker from '../../assets/images/budget-tracker.png';
import Bingeworthy from '../../assets/images/bingeworthy.png';

const projects = [
      {
            id: 1,
            title: 'BingeWorthy',
            image: Bingeworthy,
            deploy: 'https://nameless-castle-76240.herokuapp.com/',
            github: 'https://github.com/liaobrien/bingeworthy'
      },
      {
            id: 2,
            title: 'Decked Out',
            image: DeckedOut,
            deploy: 'https://hidden-island-92263.herokuapp.com/',
            github: 'https://github.com/liaobrien/Decked-Out'
      },
      {
            id: 3,
            title: 'Pack Rat',
            image: PackRat,
            deploy: 'https://liaobrien.github.io/Pack-Rat/',
            github: 'https://github.com/liaobrien/Pack-Rat'
      },
      {
            id: 4,
            title: 'Tech Blog',
            image: TechBlog,
            deploy: 'https://fast-chamber-00133.herokuapp.com/',
            github: 'https://github.com/liaobrien/tech-blog'
      },
      {
            id: 5,
            title: 'Weather Dashboard',
            image: WeatherDash,
            deploy: 'https://liaobrien.github.io/weather-dashboard',
            github: 'https://github.com/liaobrien/weather-dashboard'
      },
      {
            id: 6,
            title: 'Budget Tracker',
            image: BudgetTracker,
            deploy: 'https://hidden-badlands-92774.herokuapp.com/',
            github: 'https://github.com/liaobrien/offline-budget-tracker'
      },
]

const buttonStyle = {
      backgroundColor: 'rgb(53, 11, 77)',
      color: 'lavender'
}

export default function Project() {
      return (
            <section className="container" id="work">
                  <div className="row justify-content-center my-4">
                        {
                              projects.map((project) => (
                                    <div key={project.id} className="card p-0 col-lg-3 m-3">
                                          <img
                                                src={project.image}
                                                className="card-img-top"
                                                alt="screenshot"
                                          />
                                          <div className="card-body">
                                                <h5 className="card-title">{project.title}</h5>
                                                <a
                                                      href={project.deploy}
                                                      className="btn link m-1"
                                                      style={buttonStyle}
                                                      target="_blank"
                                                      rel="noreferrer"
                                                >Deployed</a>
                                                <a
                                                      href={project.github}
                                                      className="btn link m-1"
                                                      style={buttonStyle}
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