import React from "react";
import "./styles/choose-car.css"
import arrow from "./assets/arrow.svg"
import car from "./assets/carimage.svg"
import automat from "./assets/automat.svg"
import petrol from "./assets/petrol.svg"
import air from "./assets/air.svg"
import Cards from "./indi-cards";

function CarsCard() {
    return(
        <>
            <div className="display-cars">
                <div className="title">
                    <div className="another">Choose the car that suits you</div>
                    <div className="view-all">
                        View All
                        <img src={arrow} width={24}></img>
                    </div>
                </div>
                <div className="cars-card">
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
            </div> 
        </>
    )
}

export default CarsCard;