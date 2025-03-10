import React from 'react';
import '../styles/AdminHeader.css'; // Import the CSS file for styling

const AdminHeader = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>MyApp</h1>
                <nav className="header-nav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default AdminHeader;