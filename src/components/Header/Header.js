import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <p className='logo-icon'><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></p>
                <h1 className='logo-title'>TitanFitnessClub</h1>
            </div>
            <nav className='navItem'>
                <span>Home</span>
                <span>Service</span>
                <span>About</span>
                <span>Login</span>
            </nav>
        </div>
    );
};

export default Header;