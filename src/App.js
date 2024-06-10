import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListProduct from './components/Product/ListProduct';
import Login from './resources/authentication/auth/login';
import Menu from './resources/layouts/menu';
import Dashboard from './resources/view/home/dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Login/> } />
          <Route path='/menu' element={ <Menu/> } />
          <Route path='/dashboard' element={ <Dashboard/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
