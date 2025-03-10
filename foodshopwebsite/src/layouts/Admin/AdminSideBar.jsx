import React from 'react';
import '../styles/AdminSideBar.css'; // Import the CSS file for styling

const AdminSidebar = () => {
    return (
        <div className="sidebar h-100">
            <div className="sidebar-header">
                <h2>MyApp</h2>
            </div>
            <ul className="sidebar-menu">
                <li>
                    <a href="/">🏠 Home</a>
                </li>
                <li>
                    <a href="#about">ℹ️ About</a>
                </li>
                <li>
                    <a href="#services">🛠️ Services</a>
                </li>
                <li>
                    <a href="#contact">✉️ Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default AdminSidebar;