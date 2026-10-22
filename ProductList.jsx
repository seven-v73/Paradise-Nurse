import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';
import CartItem from './CartItem';
import './App.css';

function ProductList({ onHomeClick }) {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bac?auto=format&fit=crop&w=400&q=80", description: "Produces oxygen and filters indoor air.", cost: "$15" },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=400&q=80", description: "Easy to grow and excellent toxins absorber.", cost: "$12" },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1593691509543-c55fb32e7355?auto=format&fit=crop&w=400&q=80", description: "Elegant white flowers that purify humidity.", cost: "$18" },
        { name: "Boston Fern", image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=400&q=80", description: "Feathery fronds that add natural moisture.", cost: "$14" },
        { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?auto=format&fit=crop&w=400&q=80", description: "Broad glossy green leaves that trap dust.", cost: "$22" },
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=400&q=80", description: "Soothing gel leaves with air clearing qualities.", cost: "$10" }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?auto=format&fit=crop&w=400&q=80", description: "Calming scent promoting restful relaxation.", cost: "$20" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=400&q=80", description: "Sweet floral fragrance that brightens rooms.", cost: "$25" },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662?auto=format&fit=crop&w=400&q=80", description: "Invigorating herb fragrance for home and cooking.", cost: "$15" },
        { name: "Mint", image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?auto=format&fit=crop&w=400&q=80", description: "Crisp aromatic foliage easy to grow indoors.", cost: "$12" },
        { name: "Eucalyptus", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80", description: "Refreshing menthol aroma that aids breathing.", cost: "$24" },
        { name: "Lemon Balm", image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80", description: "Zesty citrus smell that uplifts energy.", cost: "$14" }
      ]
    },
    {
      category: "Low Maintenance Plants",
      plants: [
        { name: "ZZ Plant", image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?auto=format&fit=crop&w=400&q=80", description: "Thrives on neglect and tolerates low light.", cost: "$20" },
        { name: "Pothos", image: "https://images.unsplash.com/photo-1596724822003-855f464d2626?auto=format&fit=crop&w=400&q=80", description: "Trailing vine that thrives in almost any spot.", cost: "$12" },
        { name: "Cast Iron Plant", image: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=400&q=80", description: "Extremely resilient plant built for low light.", cost: "$28" },
        { name: "Jade Plant", image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=400&q=80", description: "Classic succulent symbol of good luck.", cost: "$16" },
        { name: "Succulent Trio", image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?auto=format&fit=crop&w=400&q=80", description: "Compact low water requirements.", cost: "$18" },
        { name: "Ponytail Palm", image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80", description: "Stores water in trunk for effortless care.", cost: "$26" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isPlantInCart = (plantName) => {
    return cartItems.some((item) => item.name === plantName);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo" onClick={onHomeClick}>
          <img src="https://cdn-icons-png.flaticon.com/512/628/628324.png" alt="Paradise Nursery" />
          <div>
            <h3 style={{ margin: 0 }}>Paradise Nursery</h3>
            <p style={{ margin: 0, fontSize: '0.8rem' }}>Where Green Meets Serenity</p>
          </div>
        </div>
        <div className="nav-links">
          <a href="#plants" onClick={() => setShowCart(false)}>Plants</a>
          <div className="cart-icon-container" onClick={() => setShowCart(true)}>
            <span className="cart-icon">🛒</span>
            {totalCartCount > 0 && <span className="cart-count">{totalCartCount}</span>}
          </div>
        </div>
      </nav>

      {showCart ? (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      ) : (
        <div className="product-grid-container" id="plants">
          {plantsArray.map((categoryObj, idx) => (
            <div key={idx}>
              <h2 className="category-title">{categoryObj.category}</h2>
              <div className="product-grid">
                {categoryObj.plants.map((plant, plantIdx) => (
                  <div key={plantIdx} className="product-card">
                    <img src={plant.image} alt={plant.name} className="product-image" />
                    <div className="product-details">
                      <h3 className="product-title">{plant.name}</h3>
                      <p className="product-description">{plant.description}</p>
                      <p className="product-price">{plant.cost}</p>
                      <button
                        className="add-to-cart-btn"
                        onClick={() => handleAddToCart(plant)}
                        disabled={isPlantInCart(plant.name)}
                      >
                        {isPlantInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;