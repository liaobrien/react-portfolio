import React from 'react';
import Navigation from './Navigation';

export default function Header(props) {
      return (
            <header className="header navbar">
                  <h1>Lia O'Brien</h1>
                  <Navigation handlePageChange={props.handlePageChange} currentPage={props.currentPage} />
            </header>
      )
}