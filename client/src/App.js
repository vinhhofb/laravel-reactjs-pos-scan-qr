import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Profile from './components/Profile';
import AddProduct from './components/AddProduct';
import ScanQRCode from './components/ScanQRCode';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/scan-qr" element={<ScanQRCode />} />
      </Routes>
    </Router>
  );
}

export default App;