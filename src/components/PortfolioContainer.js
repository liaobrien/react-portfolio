import React, { useState } from 'react';
// import Navigation from './Navigation';
import About from './pages/About';
import Project from './pages/Project'
import Contact from './pages/Contact';
import Header from './Header';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');


  const renderPage = () => {
    if (currentPage === 'Work') {
      return <Project />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header handlePageChange={handlePageChange} currentPage={currentPage} />
      {/* <Navigation currentPage={currentPage} handlePageChange={handlePageChange} /> */}
      {renderPage()}
    </div>
  );
}
