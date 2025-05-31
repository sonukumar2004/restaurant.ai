import React from 'react';
import PropTypes from 'prop-types';
import { FiShoppingCart } from 'react-icons/fi';

const AIRecommendation = ({ recommendations }) => {
  // Handle empty recommendations
  if (!recommendations || recommendations.length === 0) {
    return (
      <div className="recommendation-section">
        <h3 className="section-title">AI Recommendations</h3>
        <p className="no-recommendations">No recommendations available based on your preferences</p>
      </div>
    );
  }

  return (
    <div className="recommendation-section">
      <h3 className="section-title">Personalized AI Recommendations</h3>
      <div className="recommendation-grid">
        {recommendations.map((item) => (
          <div key={item.id} className="recommendation-card">
            <div className="image-container">
              <img 
                src={item.image || '/placeholder-food.jpg'} 
                alt={item.name}
                className="recommendation-image"
                loading="lazy"
              />
              {item.isNew && <span className="new-badge">New</span>}
            </div>
            
            <div className="recommendation-details">
              <div className="dish-header">
                <h4 className="dish-name">{item.name}</h4>
                <span className="dish-price">${item.price}</span>
              </div>
              
              <p className="dish-description">{item.description}</p>
              
              <div className="dish-footer">
                <div className="rating">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`star ${i < item.rating ? 'filled' : ''}`}>★</span>
                  ))}
                </div>
                <button 
                  className="add-to-cart-btn"
                  aria-label={`Add ${item.name} to cart`}
                >
                  <FiShoppingCart className="cart-icon" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AIRecommendation.propTypes = {
  recommendations: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string,
      rating: PropTypes.number,
      isNew: PropTypes.bool
    })
  )
};

export default AIRecommendation;