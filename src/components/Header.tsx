import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="layout">
      <header className='Top-header'>
        <div className="header-layout">
          <p className="Logo_name">Q's</p>
        </div>
      </header>    
    </div>
  );
};

export default Header;