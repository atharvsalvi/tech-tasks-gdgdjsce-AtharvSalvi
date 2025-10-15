import React from 'react';
import "./styles/navbar.css";
import logo from "./assets/react.svg"
import call from "./assets/call.svg"

function NavBar() {
    return (
        <>
            <div className='navbar'>
                <div className='company'>
                    <img src={logo} width={48}></img>
                    <h2>Car Rental</h2>
                </div>
                <div className='navigation'>
                    <div>Home</div>
                    <div>Vehicles</div>
                    <div>Details</div>
                    <div>About Us</div>
                    <div>Contact Us</div>
                </div>
                <div className='contact'>
                    <img src={call} width={40}></img>
                    <div>
                        <div>Need help?</div>
                        <div className='no'>+996 247-1680</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar;