import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                <h1 className='logo-title'>TitanFitnessClub</h1>
            </div>
        </div>
    );
};

export default Header;