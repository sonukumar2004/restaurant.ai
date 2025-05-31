import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FiTrendingUp, FiPackage, FiStar } from 'react-icons/fi';

const AdminDashboard = () => {
  const [salesData] = useState([
    { day: 'Mon', sales: 4000 },
    { day: 'Tue', sales: 3000 },
    { day: 'Wed', sales: 5000 },
    { day: 'Thu', sales: 4500 },
    { day: 'Fri', sales: 6000 },
    { day: 'Sat', sales: 8000 },
    { day: 'Sun', sales: 7500 },
  ]);

  const [topDishes] = useState([
    { name: 'Truffle Risotto', orders: 142 },
    { name: 'Grilled Salmon', orders: 128 },
    { name: 'Margherita Pizza', orders: 115 },
  ]);

  const [inventory] = useState([
    { ingredient: 'Salmon', demand: 85, stock: 60 },
    { ingredient: 'Truffle', demand: 45, stock: 30 },
    { ingredient: 'Mozzarella', demand: 120, stock: 95 },
  ]);

  return (
    <div className="admin-container">
      <h2 className="dashboard-title">
        <FiTrendingUp className="title-icon" /> AI Analytics Dashboard
      </h2>
      
      <div className="analytics-grid">
        {/* Sales Prediction Card */}
        <div className="metric-card">
          <h3><FiTrendingUp /> Sales Forecast</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#c62828" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Popular Items Card */}
        <div className="metric-card">
          <h3><FiStar /> Top Dishes</h3>
          <div className="top-list">
            {topDishes.map((dish, index) => (
              <div key={index} className="list-item">
                <span className="dish-name">{dish.name}</span>
                <span className="dish-orders">{dish.orders} orders</span>
              </div>
            ))}
          </div>
        </div>

        {/* Inventory Management Card */}
        <div className="metric-card">
          <h3><FiPackage /> Ingredient Demand</h3>
          <div className="inventory-list">
            {inventory.map((item, index) => (
              <div key={index} className="inventory-item">
                <div className="ingredient-info">
                  <span className="ingredient-name">{item.ingredient}</span>
                  <div className="demand-bar">
                    <div 
                      className="demand-fill" 
                      style={{ width: `${item.demand}%` }}
                    ></div>
                    <div 
                      className="stock-fill" 
                      style={{ width: `${item.stock}%` }}
                    ></div>
                  </div>
                </div>
                <span className="demand-percent">{item.demand}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;