import React from 'react';
import './App.scss';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';

// Import React Router DOM components
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      {/* The Router component should wrap your entire app */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
