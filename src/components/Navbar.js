import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiChevronDown, FiHome, FiShoppingCart, FiLogOut } from 'react-icons/fi';
import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Select Location');
  const [user] = useAuthState(auth);
  const navigate = useNavigate(); // 🔁

  const locations = [
    "New Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Pune"
  ];

  // 🔁 Logout handler
  const handleLogout = async () => {
    await auth.signOut();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container container">
        {/* Logo & Location */}
        <div className="navbar-brand">
          <Link to="/" className="logo-link">
            <span className="logo-text">Restaurant.AI</span>
          </Link>

          <div 
            className="location-selector"
            onMouseEnter={() => setShowLocations(true)}
            onMouseLeave={() => setShowLocations(false)}
          >
            <div className="current-location">
              <span className="location-icon">📍</span>
              <span className="location-text">{selectedLocation}</span>
              <FiChevronDown className="dropdown-icon" />
            </div>
            {showLocations && (
              <div className="locations-dropdown">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="location-item"
                    onClick={() => {
                      setSelectedLocation(location);
                      setShowLocations(false);
                    }}
                  >
                    {location}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="desktop-nav">
          <div className="nav-links">
            <Link to="/" className="nav-link"><FiHome className="home-icon" /></Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Link to="/cart" className="nav-link"><FiShoppingCart className="cart-icon" /></Link>
            <Link to="/admin" className="nav-link">Admin</Link>
          </div>

          {/* 🔁 Auth Section */}
          <div className="auth-section">
            {!user ? (
              <>
                <Link to="/login" className="auth-link">Login</Link>
                <Link to="/signup" className="auth-btn">Sign Up</Link>
              </>
            ) : (
              <button className="auth-btn" onClick={handleLogout}>
                <FiLogOut className="mr-1" /> Logout
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-location-selector">
              <div className="current-location">
                <span className="location-icon">📍</span>
                <span className="location-text">{selectedLocation}</span>
              </div>
              <div className="mobile-locations-list">
                {locations.map((location, index) => (
                  <div
                    key={index}
                    className="location-item"
                    onClick={() => {
                      setSelectedLocation(location);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {location}
                  </div>
                ))}
              </div>
            </div>

            <div className="mobile-nav-links">
              <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}><FiHome /></Link>
              <Link to="/menu" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Menu</Link>
              <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
              <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
              <Link to="/cart" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}><FiShoppingCart /></Link>
              <Link to="/admin" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Admin</Link>
            </div>

            {/* 🔁 Mobile Auth Section */}
            <div className="mobile-auth">
              {!user ? (
                <>
                  <Link to="/login" className="auth-link" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
                  <Link to="/signup" className="auth-btn" onClick={() => setIsMobileMenuOpen(false)}>Sign Up</Link>
                </>
              ) : (
                <button className="auth-btn" onClick={() => {
                  handleLogout();
                  setIsMobileMenuOpen(false);
                }}>
                  <FiLogOut className="mr-1" /> Logout
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
