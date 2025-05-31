// // Cart.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../contexts/CartContext';
// import { FaTrashAlt } from 'react-icons/fa'; // Import trash icon

// const Cart = () => {
//   const { cartItems, removeFromCart, updateQuantity } = useCart();

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
//   };

//   return (
//     <div className="cart-container">
//       <h2>Your Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty. <Link to="/" className="shop-link">Start shopping</Link></p>
//       ) : (
//         <>
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <div className="item-info">
//                   <h3>{item.name}</h3>
//                   <p>₹{item.price.toFixed(2)}</p>
//                 </div>
                
//                 <div className="quantity-controls">
//                   <button 
//                     onClick={() => updateQuantity(item.id, item.quantity - 1)}
//                     disabled={item.quantity === 1}
//                   >
//                     -
//                   </button>
//                   <span>{item.quantity}</span>
//                   <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
//                     +
//                   </button>
//                 </div>

//                 <div className="item-total">
//                   <p>₹{(item.price * item.quantity).toFixed(2)}</p>
//                   <button 
//                     className="delete-btn"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     <FaTrashAlt />
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="cart-summary">
//             <h3>Total: ₹{calculateTotal()}</h3>
//             <Link 
//   to="/payment" 
//   state={{ totalAmount: calculateTotal() }}
//   className="checkout-btn"
// >
//   Proceed to Payment
// </Link>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

// Cart.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { FaTrashAlt } from 'react-icons/fa'; // Import trash icon

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  // Return a number, not a formatted string
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/" className="shop-link">Start shopping</Link></p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price.toFixed(2)}</p>
                </div>
                
                <div className="quantity-controls">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>

                <div className="item-total">
                  <p>₹{(item.price * item.quantity).toFixed(2)}</p>
                  <button 
                    className="delete-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ₹{calculateTotal().toFixed(2)}</h3>
            <Link 
              to="/payment" 
              state={{ totalAmount: calculateTotal() }} // Send as number
              className="checkout-btn"
            >
              Proceed to Payment
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;