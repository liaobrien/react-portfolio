import React from 'react';
// note: move all the jsx in here to header.js; this will hold my different pages i think (about, contact, etc.)
export default function Navigation({ currentPage, handlePageChange }) {
      return (
            <nav className="navigation">
                  <ul>
                        <li><a href="#about-me"
                              onClick={() => handlePageChange('About Me')}

                              className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
                        >About Me</a></li>
                        <li><a href="#work"
                              onClick={() => handlePageChange('Work')}

                              className={currentPage === 'Work' ? 'nav-link active' : 'nav-link'}
                        >Work</a></li>
                        <li><a href="#contact"
                              onClick={() => handlePageChange('Contact')}

                              className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>Contact Me</a></li>
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