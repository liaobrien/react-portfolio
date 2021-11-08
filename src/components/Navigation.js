import React from 'react';
// note: move all the jsx in here to header.js; this will hold my different pages i think (about, contact, etc.)
export default function Navigation() {
      return (
            <nav>
                  <ul>
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                        <li>
                              <a
                                    href="https://docs.google.com/document/d/1nG6It3SZ4QYIcA0Aa--fMz31v48jBWUyXAUwGeDZYC0/edit?usp=sharing"
                                    target="_blank"
                                    rel="noreferrer"
                              >Resume</a
                              >
                        </li>
                  </ul>
            </nav>
      )
}