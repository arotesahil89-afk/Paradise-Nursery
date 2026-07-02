import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ProductList from './components/ProductList';
import CartItem from './components/CartItem';
import './App.css';

const AppContent = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
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
