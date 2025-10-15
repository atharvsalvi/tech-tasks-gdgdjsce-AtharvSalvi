import React from "react";
import "./styles/choose-car.css"
import arrow from "./assets/arrow.svg"
import car from "./assets/carimage.svg"
import automat from "./assets/automat.svg"
import petrol from "./assets/petrol.svg"
import air from "./assets/air.svg"

function cards() {
    return(
        <div className="indi-card">
            <img src={car}></img>
            <div className="car-name">
                <div className="model">
                    <span className="high black">
                        Mercedes
                    </span>
                    <span className="low">
                        Sedan
                    </span>
                </div>
                <div className="rate">
                    <span className="high purple">
                        $25
                    </span>
                    <span className="low">
                        per day
                    </span>
                </div>
            </div>
            <div className="car-features">
                <div className="details">
                    <img src={automat} width={18}></img>
                    <span>Automat</span>
                </div>
                <div className="details">
                    <img src={petrol} width={18}></img>
                    <span>PB85</span>
                </div>
                <div className="details">
                    <img src={air} width={18}></img>
                    <span>Air Conditioner</span>
                </div>
            </div>
            <button>
                View Details
            </button>
        </div>
    )
}

export default cards;