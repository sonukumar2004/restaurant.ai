import React, { useState } from 'react';
import { FiMessageSquare } from 'react-icons/fi';
import { useCart } from '../contexts/CartContext';

const Menu = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [notification, setNotification] = useState('');
  const { addToCart } = useCart();

  const menuItems = [
    {
      id: 1,
      name: 'Truffle Mushroom Risotto',
      price: 240,
      description: 'Creamy arborio rice with wild mushrooms and black truffle',
      image: 'download.jpeg',
      category: 'Italian',
      sugarFree: false
    },
    {
      id: 2,
      name: 'Samosa',
      price: 120,
      description: 'A fried or baked pastry filled with spiced potatoes and peas',
      image: 'assert/download.jpeg',
      category: 'Italian',
      vegetarian: true
    },
    {
      id: 3,
      name: 'Crispy Masala Dosa',
      price: 620,
      description: 'A thin, crispy crepe made from fermented rice and lentil batter',
      image: 'assert/Masala-Dosa.jpg',
      category: 'Asian'
    },
    {
      id: 4,
      name: 'Sugar-Free Chocolate Cake',
      price: 149,
      description: 'Diabetic-friendly chocolate cake with stevia',
      image: 'assert/images.jpeg',
      category: 'Dessert',
      sugarFree: true
    },
    {
      id: 5,
      name: 'Rasgulla',
      price: 252,
      description: 'Syrupy sweet made from dumplings of chenna (paneer)',
      image: 'assert/Rasgulla-Featured-Image.jpg',
      category: 'Dessert'
    },
    {
      id: 6,
      name: 'Gulab Jamun',
      price: 123,
      description: 'Milk-based sweet popular in India',
      image: 'assert/gulab-jamun.jpg',
      category: 'Dessert'
    }
  ];

  const getAIResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    let matches = [];
    let response = '';

    if (lowerQuery.includes('hi') || lowerQuery.includes('hello')) {
      return "👋 Welcome to Restaurant AI! How can I help you today?";
    }

    if (lowerQuery.includes('diabetes') || lowerQuery.includes('sugar')) {
      matches = menuItems.filter(item => item.sugarFree);
      response = "🍰 Sugar-Free Recommendations:";
    } else if (lowerQuery.includes('vegetarian')) {
      matches = menuItems.filter(item => item.name.toLowerCase().includes('dosa') || item.vegetarian);
      response = "🌱 Vegetarian Recommendations:";
    } else if (lowerQuery.includes('non vegetarian')) {
      return "🚫 Sorry, we don't have any non-vegetarian items available at the moment.";
    } else if (lowerQuery.includes('dessert')) {
      matches = menuItems.filter(item =>
        item.name.toLowerCase().includes('gulab') ||
        item.name.toLowerCase().includes('rasgulla')
      );
      response = "🍬 Dessert Recommendations:";
    } else if (lowerQuery.includes('hey ai')) {
      matches = menuItems.filter(item => item.name.toLowerCase().includes('samosa'));
      response = "🥟 Here’s something you might like:";
    } else {
      const popular = menuItems.filter(item => item.category !== 'Dessert');
      const randomItem = popular[Math.floor(Math.random() * popular.length)];
      return `🍽️ I recommend trying our ${randomItem.name} - ${randomItem.description} (₹${randomItem.price})`;
    }

    if (matches.length > 0) {
      const itemsList = matches.slice(0, 3).map(item =>
        `• ${item.name} - ₹${item.price}\n  ${item.description}`
      ).join('\n');
      return `${response}\n${itemsList}`;
    }

    return "❌ No matching items found, please try again.";
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setNotification(`${item.name} added to cart! 🛒`);
    setTimeout(() => setNotification(''), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { text: input, isAI: false };
    setMessages(prev => [...prev, userMessage]);

    const aiResponse = getAIResponse(input);
    const aiMessage = { text: aiResponse, isAI: true };
    setMessages(prev => [...prev, aiMessage]);

    setInput('');
  };

  return (
    <div className="menu-container">
      {/* Left Menu Section */}
      <div className="menu-items-container">
        <h2 className="menu-title">AI-Curated Menu</h2>
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <div className="card-content">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="card-footer">
                  <span>₹{item.price}</span>
                  <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right AI Chat Section */}
      <div className="ai-chat-container">
        <div className="chat-header">
          <FiMessageSquare className="chat-icon" />
          <h3>AI Dining Assistant</h3>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.isAI ? 'ai-message' : 'user-message'}`}
            >
              {msg.text.split('\n').map((line, i) => (
                <p key={i} className="message-line">
                  {line.startsWith('•') ? '✦' : ''} {line.replace('•', '').trim()}
                </p>
              ))}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="chat-input">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask for recommendations..."
          />
          <button type="submit">Send</button>
        </form>
      </div>

      {/* Cart Notification */}
      {notification && <div className="cart-notification">{notification}</div>}
    </div>
  );
};

export default Menu;
