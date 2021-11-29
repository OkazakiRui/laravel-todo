import { VFC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// App.js
const Home = () => <h2>Home</h2>;

const About = () => <h2>About</h2>;

const App: VFC = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </>
);

export default App;
