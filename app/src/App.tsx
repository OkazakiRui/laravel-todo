import { VFC } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HelpPage from 'components/help/HelpPage';
import LoginPage from 'components/login/LoginPage';
import TasksPage from 'components/tasks/TasksPage';
import './App.css';
// import axios from 'axios';

const App: VFC = () => (
  // useEffect(() => {
  //   void axios
  //     .post('/api/login', {
  //       email: 'admin@example.com',
  //       password: '123456789',
  //     })
  //     .then((res) => console.log(res));
  // }, []);

  <>
    <header className="global-head">
      <ul>
        <li>
          <Link to="/">Tasks</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/help">Help</Link>
        </li>
        <li>
          <span>Logout</span>
        </li>
      </ul>
    </header>
    <Routes>
      <Route path="/" element={<TasksPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/help" element={<HelpPage />} />
    </Routes>
  </>
);
export default App;
