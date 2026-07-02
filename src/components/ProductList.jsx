import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/CartSlice';
import '../styles/ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [addedItems, setAddedItems] = useState({});

  const plants = [
    {
      id: 1,
      name: 'Snake Plant',
      price: 25.99,
      image: 'https://tse3.mm.bing.net/th/id/OIP.TVhhLvLbViZ-za1Uo3X_SgHaE8?pid=Api&P=0&h=180',
      category: 'Air Purifying',
      description: 'Converts carbon dioxide to oxygen at night. Excellent for bedrooms and improves air quality.',
    },
    {
      id: 2,
      name: 'Spider Plant',
      price: 19.99,
      image: 'https://126851030.cdn6.editmysite.com/uploads/1/2/6/8/126851030/s420168171722361322_p369_i5_w1170.jpeg',
      category: 'Air Purifying',
      description: 'A highly resilient plant that filters toxic household pollutants while growing cascading foliage.',
    },
    {
      id: 3,
      name: 'Aloe Vera',
      price: 15.99,
      image: 'https://tse2.mm.bing.net/th/id/OIP._E1qxsl8ID7LXk7-2aXSSAHaEK?pid=Api&P=0&h=180',
      category: 'Medicinal',
      description: 'Contains soothing, healing gel for minor burns and skin irritations. Very easy to propagate.',
    },
    {
      id: 4,
      name: 'Basil',
      price: 12.99,
      image: 'https://tse4.mm.bing.net/th/id/OIP.tArBwz969R_fLaIvb5bM5wHaE8?pid=Api&P=0&h=180',
      category: 'Medicinal',
      description: 'A fragrant culinary herb known for its therapeutic aroma, anti-inflammatory and herbal benefits.',
    },
    {
      id: 5,
      name: 'Monstera Deliciosa',
      price: 35.99,
      image: 'https://tse2.mm.bing.net/th/id/OIP.TAkGpR6_IYEyXprPgSTcYgHaHa?pid=Api&P=0&h=180',
      category: 'Decorative',
      description: 'The iconic "Swiss Cheese" plant with dramatic split leaves, adding a tropical statement to any room.',
    },
    {
      id: 6,
      name: 'Pothos',
      price: 22.99,
      image: 'https://tse3.mm.bing.net/th/id/OIP.y5BjOvXYfxUl4FmpbVXQNwHaFA?pid=Api&P=0&h=180',
      category: 'Decorative',
      description: 'Hardy trailing vine with beautiful heart-shaped leaves that can thrive in various lighting situations.',
    },
  ];

  const categoryDescriptions = {
    'Air Purifying': 'Clean the air in your home with these natural, resilient air-filtering powerhouses that actively remove common indoor toxins.',
    'Medicinal': 'Incorporate nature\'s healing wisdom into your daily life with plants offering therapeutic qualities, soothing gels, and herbal benefits.',
    'Decorative': 'Transform your living space into a luxury garden sanctuary with bold foliage, elegant draping vines, and iconic aesthetic plants.',
  };

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedItems(prev => ({
      ...prev,
      [plant.id]: true,
    }));
  };

  const isItemInCart = (plantId) => {
    return cartItems.some(item => item.id === plantId);
  };

  const categories = ['Air Purifying', 'Medicinal', 'Decorative'];

  return (
    <div className="product-list-container">
      <h1 className="products-heading">Discover Our Plant Collection</h1>
      {categories.map(category => (
        <section key={category} className="category-section">
          <h2 className="category-heading">{category}</h2>
          <p className="category-description-text">{categoryDescriptions[category]}</p>
          <div className="products-grid">
            {plants
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id} className="product-card">
                  <div className="product-image-container">
                    <img src={plant.image} alt={plant.name} className="product-image" />
                    <span className="product-tag">{plant.category}</span>
                  </div>
                  <div className="product-card-body">
                    <h3 className="product-name">{plant.name}</h3>
                    <p className="product-description">{plant.description}</p>
                    <div className="product-footer">
                      <span className="product-price">${plant.price.toFixed(2)}</span>
                      <button
                        className={`add-to-cart-btn ${isItemInCart(plant.id) ? 'added' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isItemInCart(plant.id)}
                      >
                        {isItemInCart(plant.id) ? (
                          <>
                            <span className="added-icon">✓</span> Added
                          </>
                        ) : (
                          'Add to Cart'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default ProductList;
