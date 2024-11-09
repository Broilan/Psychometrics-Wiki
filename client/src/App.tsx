import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {About, Home} from './pages';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>
);

export default App;
