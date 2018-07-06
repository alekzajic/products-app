import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <img src={logo} width="24" className="header__logo-img" alt="logo" />
            </div>
            <h1 className="header__title">
                <NavLink className="header__title-link" to="/">Productr</NavLink>
            </h1>
            <ul className="header__nav">
                <li className="header__nav-item">
                    <NavLink className="header__nav-link" to="/products">
                        Product List
                    </NavLink>
                </li>
            </ul> 
        </header>
    )
}

export default Header