import React from 'react';
import { useState } from "react";
import "./styles/book.css"

function Search() {
    return (
        <>
            <div className='card'>
                <div className='info'>
                    <h1>Experience the road like never before</h1>
                    <p>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
                    <button>View all cars</button>
                </div>
                <div className='bookcard'>
                    <h2>Book your car</h2>
                    <select className='adjust' id="cars" name="cars">
                        <option value="" disabled selected hidden>Car Type</option>
                        <option value="volvo">Volvo</option>
                        <option value="bmw">BMW</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select className='adjust' id="cars" name="cars">
                        <option value="" disabled selected hidden>Place of rental</option>
                        <option value="volvo">Volvo</option>
                        <option value="bmw">BMW</option>
                        <option value="audi">Audi</option>
                    </select>
                    <select className='adjust' id="cars" name="cars">
                        <option value="" disabled selected hidden>Place of return</option>
                        <option value="volvo">Volvo</option>
                        <option value="bmw">BMW</option>
                        <option value="audi">Audi</option>
                    </select>
                    <input className='adjust' type="date" id="dob" name="dob" placeholderText='Rental date'/>
                    <input className='adjust' type="date" id="dob" name="dob" placeholderText='Rental date'/>
                    <button>View all cars</button>
                </div>
            </div>
        </>
    )
}

export default Search;