import './scss/app.scss';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import MainLayout from './layout/MainLayout';
// import pizzas from './assets/img/pizzas.json';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="pizza/:id" element={<FullPizza />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
export default App;
