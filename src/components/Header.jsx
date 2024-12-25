import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="nav-link">Login</Link>
        <Link to="/user-dashboard" className="nav-link">User Dashboard</Link>
        <Link to="/admin-dashboard" className="nav-link">Admin Dashboard</Link>
        <Link to="/cart" className="nav-link">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
