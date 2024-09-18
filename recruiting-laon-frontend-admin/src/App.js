import './app/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/app/pages/Login';
import Container from './app/components/container/Background';
import Dashboard from '../src/app/pages/dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
