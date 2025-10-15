import React from 'react';
import location from "./assets/location.svg"
import car from "./assets/car.svg"
import pocket from "./assets/pocket.svg"
import "./styles/features.css"

function Features() {
    return (
        <>
            <div className='feature-card'>
                <div className='indi-card'>
                    <img src={location} width={64}></img>
                    <h3>Availability</h3>
                    <p>Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis</p>
                </div>
                <div className='indi-card'>
                    <img src={car} width={64}></img>
                    <h3>Comfort</h3>
                    <p>Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis</p>
                </div>
                <div className='indi-card'>
                    <img src={pocket} width={64}></img>
                    <h3>Savings</h3>
                    <p>Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis</p>
                </div>
            </div>
        </>
    )
}

export default Features;