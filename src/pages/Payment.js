import React, { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';


const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { clearCart } = useCart();
    const [paymentAmount, setPaymentAmount] = useState(0);
    const [paymentStatus, setPaymentStatus] = useState('pending');
  
    const upiId = 'your-upi-id@axisbank';
    const merchantName = 'AI Restaurant';
    const transactionNote = 'Payment for food order';
  
    const upiPaymentUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${paymentAmount}&tn=${encodeURIComponent(transactionNote)}&cu=INR`;
  
    useEffect(() => {
      if (location.state?.totalAmount) {
        const amount = parseFloat(location.state.totalAmount);
        setPaymentAmount(isNaN(amount) ? 0 : amount);
      } else {
        navigate('/cart');
      }
    }, [location, navigate]);
  
    const handlePaymentSuccess = () => {
      setPaymentStatus('success');
      clearCart();
      setTimeout(() => navigate('/'), 3000);
    };

  return (
    <div className="payment-wrapper">
      <div className="payment-box receipt-style">
        {/* Header Section */}
        <div className="receipt-header">
          <h2>AI Restaurant</h2>
          <p>Order #1234 | {new Date().toLocaleDateString()}</p>
        </div>

        {/* Amount Display */}
        <div className="amount-section">
          <h3>Total Amount Due:</h3>
          <h1 className="total-amount">₹{paymentAmount.toFixed(2)}</h1>
        </div>

        {/* QR Code Section */}
        <div className="qr-section">
          <QRCodeSVG 
            value={upiPaymentUrl}
            size={200}
            level="H"
            includeMargin={true}
          />
          <p className="scan-text">Scan QR to Pay</p>
        </div>

        {/* Payment Details */}
        <div className="payment-details">
          <div className="detail-row">
            <span>Merchant Name:</span>
            <span>{merchantName}</span>
          </div>
          <div className="detail-row">
            <span>UPI ID:</span>
            <span className="upi-id">{upiId}</span>
          </div>
          <div className="detail-row">
            <span>Note:</span>
            <span>{transactionNote}</span>
          </div>
        </div>

        {/* Success Message */}
        {paymentStatus === 'success' ? (
          <div className="payment-success">
            <h3>Payment Successful! 🎉</h3>
            <p>Redirecting to homepage...</p>
          </div>
        ) : (
          <button className="confirm-button" onClick={handlePaymentSuccess}>
            Confirm Payment
          </button>
        )}

        {/* Footer */}
        <div className="receipt-footer">
          <p>Thank you for dining with us!</p>
          <p>Visit again!</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;