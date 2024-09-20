import './app/global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/app/pages/Login';
import Container from './app/components/container/Background';
import Dashboard from '../src/app/pages/dashboard/Dashboard';
import UsersIndex from './app/pages/users/UsersIndex';
import UserNew from './app/pages/users/UserNew';
import ContentsIndex from './app/pages/contents/ContentsIndex';
import ContentsNew from './app/pages/contents/ContentNew';
import CategoriesIndex from './app/pages/categories/CategoriesIndex';
import CategoryNew from './app/pages/categories/CategoryNew';
import AwardsIndex from './app/pages/awards/AwardsIndex';
import AwardNew from './app/pages/awards/AwardNew';
import ActorsIndex from './app/pages/actors/ActorsIndex';
import ActorNew from './app/pages/actors/ActorNew';
import UserEdit from './app/pages/users/UserEdit';
import { AuthProvider } from './app/utils/auth/AuthContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Container>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path='/dashboard' element={<Dashboard />} />

              {/* Usuários */}
              <Route path='/users' element={<UsersIndex />} />
              <Route path='/users/new' element={<UserNew />} />
              <Route path='/users/edit/:id' element={<UserEdit />} />

              {/* Conteúdos */}
              <Route path='/contents' element={<ContentsIndex />} />
              <Route path='/contents/new' element={<ContentsNew />} />

              {/* Categorias */}
              <Route path='/categories' element={<CategoriesIndex />} />
              <Route path='/categories/new' element={<CategoryNew />} />

              {/* Prêmios */}
              <Route path='/awards' element={<AwardsIndex />} />
              <Route path='/awards/new' element={<AwardNew />} />

              {/* Atores */}
              <Route path='/actors' element={<ActorsIndex />} />
              <Route path='/actors/new' element={<ActorNew />} />
            </Routes>
          </Container>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
