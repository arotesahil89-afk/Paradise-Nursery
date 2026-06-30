import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const showHeader = location.pathname === '/products' || location.pathname === '/cart';

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
