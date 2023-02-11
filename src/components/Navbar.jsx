import React from 'react';
import Message from './Message'

const Navbar = () => {
    return (
    <div className="navContainer">
        <h1 id="title">Stranger's Things</h1>
        <div className="navItemsContainer">
            <Message/>
            <h3 className="navItems" id="loginButton">Login / Sign-up</h3>
            <h3 className="navItems" id="LogoutButton">Logout</h3>
            
        </div>
    </div>
    )
}

export default Navbar;