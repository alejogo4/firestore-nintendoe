import React from 'react';
import './style.css';
import {ReactComponent as Logo} from './../../resources/logo.svg';

function Header(){
    return(
        <header className="header">
            <div className="logo">
                <Logo/>
            </div>
        </header>
    )
}

export default Header;