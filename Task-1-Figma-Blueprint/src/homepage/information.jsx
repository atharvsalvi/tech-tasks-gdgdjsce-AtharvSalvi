import React from "react";
import "./styles/information.css";
import image from "./assets/image.svg";
import number from "./assets/number.svg"

function Information () {
    return (
        <>
            <div className="info-card">
                <img src={image}></img>
                <div className="features-info">
                    <div className="indi-info">
                        <div className="heading">
                            <img src={number} width={32}></img><h3>Erat at semper</h3>
                        </div>
                        <p>Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum</p>
                    </div>
                    <div className="indi-info">
                        <div className="heading">
                            <img src={number} width={32}></img><h3>Erat at semper</h3>
                        </div>
                        <p>Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum</p>
                    </div>
                    <div className="indi-info">
                        <div className="heading">
                            <img src={number} width={32}></img><h3>Erat at semper</h3>
                        </div>
                        <p>Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum</p>
                    </div>
                    <div className="indi-info">
                        <div className="heading">
                            <img src={number} width={32}></img><h3>Erat at semper</h3>
                        </div>
                        <p>Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum</p>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Information;