// src/pages/Home.tsx
import "../styles/home.css"; // CSS for styling the Wikipedia-like appearance
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homepage">
      {/* Site Title */}
      <h1 className="site-title">Psychometrics Wiki</h1>
      
      {/* Search Bar */}
      <div className="search-container">
        <input type="text" placeholder="Search for psychometrics topics..." className="search-input" />
        <button className="search-button">Search</button>
      </div>

      {/* Introductory Text */}
      <div className="intro-text">
        <p>
          Welcome to the Psychometrics Wiki! Here you’ll find information on all things psychometrics, from foundational theories to advanced measurement techniques. 
          Explore articles on psychological testing, statistical concepts, and assessment methods to deepen your understanding of the field.
        </p>
      </div>

      {/* Featured Topics */}
      <div className="featured-topics">
        <h2>Featured Topics</h2>
        <ul>
          <li><Link to="/article/1">Introduction to Psychometrics</Link></li>
          <li><Link to="/article/2">Reliability and Validity</Link></li>
          <li><Link to="/article/3">IQ Testing</Link></li>
          <li><Link to="/article/4">Factor Analysis</Link></li>
          <li><Link to="/article/5">Item Response Theory</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

