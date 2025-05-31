

import React from 'react';
//import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Home = () => {
  const { addToCart, showNotification } = useCart();

  const dishes = [
    { id: 1, name: 'Masala Dosa', price: 249, image: 'assert/Masala-Dosa.jpg' },
    { id: 2, name: 'Rasgulla', price: 320, image: 'assert/Rasgulla-Featured-Image.jpg' },
    { id: 3, name: 'Samosa', price: 289, image: 'assert/download.jpeg' },
    { id: 4, name: 'Gulab Jamun', price: 109, image: 'assert/gulab-jamun.jpg' }
  ];

  const handleAddToCart = (dish) => {
    addToCart(dish);
  };

  return (
    <div
      className="home-container text-white min-h-screen"
      style={{
        backgroundImage: 'url(/images/food-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {showNotification && (
        <div className="notification animate-bounce bg-green-500 text-black px-4 py-2 rounded text-center my-4 mx-auto w-max">
          🛒 Item added to cart!
        </div>
      )}

      {/* <section className="hero-section py-10 text-center bg-black bg-opacity-60">
        <div className="hero-content">
          <h1 className="hero-title text-4xl font-bold">Experience AI-Enhanced Restaurant</h1>
          <p className="hero-subtitle mt-2">Discover personalized culinary experiences powered by AI</p>
          <div className="search-container mt-4 flex justify-center gap-2">
            <input
              type="text"
              placeholder="Search dishes, cuisines, or ingredients..."
              className="search-input p-2 rounded text-black"
            />
            <button className="search-button bg-yellow-400 px-4 py-2 rounded text-black">Find Food</button>
          </div>
        </div>
      </section> */}

      

      <section className="popular-dishes px-4 py-8 bg-black bg-opacity-70">
        <h2 className="section-title text-2xl mb-4">Most Popular Dishes</h2>
        <div className="dishes-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dishes.map((dish, index) => (
            <div
              key={dish.id}
              className="dish-card bg-gray-800 rounded-lg overflow-hidden transform transition-transform hover:scale-105 shadow-lg"
              style={{ animation: `fadeInUp 0.5s ease ${(index + 1) * 0.2}s forwards`, opacity: 0 }}
            >
              <div
                className="dish-image h-40 bg-cover bg-center"
                style={{ backgroundImage: `url(/${dish.image})` }}
              ></div>
              <div className="dish-info p-4">
                <h3 className="dish-name text-lg font-semibold">{dish.name}</h3>
                <p className="dish-price text-yellow-400">₹{dish.price}</p>
                <button
                  className="add-to-cart-btn mt-2 bg-green-500 hover:bg-green-600 text-black px-3 py-1 rounded"
                  onClick={() => handleAddToCart(dish)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
