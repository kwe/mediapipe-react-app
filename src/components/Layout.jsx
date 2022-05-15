import React from 'react';
import '../App.css';
const Layout = ({ children }) => {
  return (
    <div className='container'>
    <h1 className='container text-3xl'>Layout.jsx</h1>
      {children}
    </div>
  );
}

export default Layout;