import './app/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/app/pages/Login';
import Container from './app/components/container/Container';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
