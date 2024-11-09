import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {About, Home, Article} from './pages';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:id" element={<Article />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
