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
            description: 'MERN Stack application where users can search any movie by title to create their own personal watchlist.',
            tools: 'React | Bootstrap | GraphQL | MongoDB | Mongoose | Server-side API',
            deploy: 'https://nameless-castle-76240.herokuapp.com/',
            github: 'https://github.com/liaobrien/bingeworthy'
      },
      {
            id: 2,
            title: 'Decked Out',
            image: DeckedOut,
            description: "Full stack app similar to Quizlet where users can create, update, and delete study decks and interact with other users' decks.",
            tools: 'Handlebars | Bootstrap | Node | Express | MySQL | Sequelize | REST API',
            deploy: 'https://hidden-island-92263.herokuapp.com/',
            github: 'https://github.com/liaobrien/Decked-Out'
      },
      {
            id: 3,
            title: 'Pack Rat',
            image: PackRat,
            description: 'Front-end application that displays NASA satellite imagery and current weather for any National Park in the U.S. Also features a packing list feature that the user creates dynamically.',
            tools: 'HTML | Bulma | jQuery | Server-side API',
            deploy: 'https://liaobrien.github.io/Pack-Rat/',
            github: 'https://github.com/liaobrien/Pack-Rat'
      },
      {
            id: 4,
            title: 'Tech Blog',
            image: TechBlog,
            description: 'Full stack CMS blog that allows users to create, edit, and delete blog posts via authentication, as well as comment on posts.',
            tools: 'Handlebars | Bootstrap | Node | Express | MySQL | Sequelize | REST API',
            deploy: 'https://fast-chamber-00133.herokuapp.com/',
            github: 'https://github.com/liaobrien/tech-blog'
      },
      {
            id: 5,
            title: 'Weather Dashboard',
            image: WeatherDash,
            description: 'Front-end application that calls the current weather and 5-day forecast of any city entered or previously searched by the user.',
            tools: 'HTML | Bootstrap | jQuery | Server-side API',
            deploy: 'https://liaobrien.github.io/weather-dashboard',
            github: 'https://github.com/liaobrien/weather-dashboard'
      },
      {
            id: 6,
            title: 'Budget Tracker',
            image: BudgetTracker,
            description: "An application for tracking a user's budget refactored into a PWA.",
            tools: 'HTML | Bootstrap | MongoDB | Mongoose | Node | Express',
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
            <div className="row justify-content-center my-4">
                  <h2 className="work-header text-center">My Work</h2>
                  {
                        projects.map((project) => (
                              <div key={project.id} className="card p-0 col-lg-4 m-3 text-center">
                                    <img
                                          src={project.image}
                                          className="card-img-top"
                                          alt="screenshot"
                                    />
                                    <div className="card-body d-flex flex-column">
                                          <h5 className="card-title"><strong>{project.title}</strong></h5>
                                          <p>{project.description}</p>
                                          <p><strong>Tools:</strong> <br /> {project.tools}</p>
                                          <div className="mt-auto">
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
                              </div>
                        ))
                  }
            </div>
      )
}