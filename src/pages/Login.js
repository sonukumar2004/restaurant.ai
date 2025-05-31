// import React, { useState } from 'react';
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { Link } from 'react-router-dom';
// import { FiMail, FiLock } from 'react-icons/fi';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const button = document.getElementById("login");

//       function handleLogin() {
//         const email = document.getElementById("email")?.value;
//         const password = document.getElementById("password")?.value;

//         const isEmailPresent = localStorage.getItem(email);
//         if (!isEmailPresent) {
//           alert("User not found. Please signup");
//           return;
//         }

//         const storedUser = JSON.parse(isEmailPresent);
//         const storedPassword = storedUser.password;

//         if (password === storedPassword) {
//           localStorage.setItem("isLoggedIn", true);
//           window.location.href = "/home.html";
//         } else {
//           alert("Incorrect Password");
//           return;
//         }
//       }

//       button.addEventListener("click", handleLogin);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Welcome Back</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <FiMail className="input-icon" />
//             <input
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FiLock className="input-icon" />
//             <input
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               required
//             />
//           </div>

//           <button type="submit" className="auth-btn">Login</button>

//           <div className="auth-links">
//             <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
//             <span>New user? <Link to="/signup" className="auth-link">Create Account</Link></span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;





// import React, { useState } from 'react';
// import { auth } from "../firebase";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { useNavigate, Link } from 'react-router-dom';
// import { FiMail, FiLock } from 'react-icons/fi';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');

//     try {
//       await signInWithEmailAndPassword(auth, formData.email, formData.password);
//       localStorage.setItem("isLoggedIn", "true");
//       navigate("/"); // redirect to home after successful login
//     } catch (err) {
//       setError('Invalid email or password. Please try again.');
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">
//         <h2>Welcome Back</h2>

//         {error && <p style={{ color: 'red' }}>{error}</p>}

//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <FiMail className="input-icon" />
//             <input
//               type="email"
//               id="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <FiLock className="input-icon" />
//             <input
//               type="password"
//               id="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//               required
//             />
//           </div>

//           <button type="submit" className="auth-btn">Login</button>

//           <div className="auth-links">
//             <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
//             <span>New user? <Link to="/signup" className="auth-link">Create Account</Link></span>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
      console.log("Login successful:", userCredential.user);
      navigate("/"); // Redirect to Home page
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>

        {error && <p className="error-message">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FiMail className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className="input-group">
            <FiLock className="input-icon" />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="auth-btn">Login</button>

          <div className="auth-links">
            <Link to="/forgot-password" className="auth-link">Forgot Password?</Link>
            <span>New user? <Link to="/signup" className="auth-link">Create Account</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
