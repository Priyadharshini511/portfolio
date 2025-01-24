import React, { useEffect } from 'react'; // Make sure React is imported
import { Link } from 'react-router-dom';

const Header = () => {
  // Handle sticky header when scrolling
  const handleScroll = () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Adding scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="header sticky-header">
      <h1 className="fade-in">My Portfolio</h1>
      <nav className="nav-menu">
        <Link to="/" className="fade-in">Home</Link>
        <Link to="/about" className="fade-in">About</Link>
        <Link to="/projects" className="fade-in">Projects</Link>
        <Link to="/contact" className="fade-in">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
