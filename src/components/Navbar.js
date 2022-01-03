import React from 'react';
import Logo from './../assets/react.png';
import './Navbar.css';

export default function Navbar() {
    return (
        <div className = "nav-container">
            <div className="logo">
                <img src = {Logo} alt='react logo' />
                <h3 className = "nav--logo-text">ReactFacts</h3>
            </div>
            <h4 className = "nav--title">React Course - Project 1</h4>
        </div>
    )
}
