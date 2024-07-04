import TopNav from './top-navbar';
import Navbar from './navbar';
import HomePage from './HomePage';
import ProductList from './productlist';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetals';
import { useSelector } from 'react-redux';
import Auth from './components/Auth';
import CartItems from './components/cartItems';
import FavItems from './components/favItems';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Router>
      <div className='App'>
        {!isLoggedIn && <Auth />}
        {isLoggedIn && (
          <>
            <TopNav />
            <Navbar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/products/:id' element={<ProductDetails />} />
              <Route path='/cart' element={<CartItems />} />
              <Route path='/favourites' element={<FavItems />} />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}

export default App;
