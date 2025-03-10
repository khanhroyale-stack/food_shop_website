import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '../styles/Header.css'
import Magnet from '../components/Magnet';
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(
         localStorage.getItem("isLoggedIn") === "true"
    );
    const handleClick = () => {
        const newStatus = !isLoggedIn;
    setIsLoggedIn(newStatus);
    localStorage.setItem("isLoggedIn", newStatus);
      };
    return (
        <div className='header-container'>
            <div className='bg-dark text-light d-flex justify-content-between align-items-center px-3 p-2 header-container-second'>
                <div className='mx-5'>
                    <i class="bi bi-telephone"></i> (414) 857 - 0107
                    <i className="bi bi-envelope ms-3 me-2"></i> khanhhoang@lethimcook
                </div>
                <div className='mx-5'>
                    <i className="bi bi-twitter me-3"></i>
                    <i className="bi bi-facebook me-3"></i>
                    <i className="bi bi-instagram me-3"></i>
                    <i className="bi bi-github"></i>
                </div>
            </div>
        <div className='d-flex justify-content-between align-items-center p-4 header-container-third'>
            <div className='d-flex align-items-center ms-5'>
            <img src="https://cdn-icons-png.flaticon.com/512/5235/5235253.png" className='main-icon-header ' alt="icon" />
            <h1>Let Him Cook</h1>
            </div>
            <div>
                <ul className='list d-flex list-unstyled '>
                    <li className='list-second'><a href="/" className="text-decoration-none text-dark">Home</a></li>
                    <li className='list-second'><a href="/about" className="text-decoration-none text-dark">About</a></li>
                    <li className='list-second'><a href="/menu" className="text-decoration-none text-dark">Menu</a></li>
                    <li className='list-second'><a href="/pages" className="text-decoration-none text-dark">Pages</a></li>
                    <li className='list-second'><a href="/contact" className="text-decoration-none text-dark">Contact</a></li>
                    <li className='list-second'><a href="/profile" className="text-decoration-none text-dark">Profile</a></li>
                    <li className='list-second'><a href="/product-manage" className="text-decoration-none text-dark">Manage</a></li>


                </ul>
            </div>
            <div className='me-5'>
            <Magnet padding={100} disabled={false} magnetStrength={10}>
  
                 <a href="/login" className='text-decoration-none text-dark btn-navbar' onClick={handleClick}>
                 {isLoggedIn ? "Log out" : "Log in"}
                 </a>
            </Magnet>
            </div>
        </div>
        </div>
    );
};

export default Header;