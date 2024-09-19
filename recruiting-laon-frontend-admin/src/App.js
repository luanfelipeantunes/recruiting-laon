import './app/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/app/pages/Login';
import Container from './app/components/container/Background';
import Dashboard from '../src/app/pages/dashboard/Dashboard';
import UsersIndex from './app/pages/users/UsersIndex';
import UserNew from './app/pages/users/UserNew';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users' element={<UsersIndex />} />
            <Route path='/users/new' element={<UserNew />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
