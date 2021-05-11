import React from 'react'
import './Rooms.css'
import pool from './images/Services/pool.jpg'

function Rooms() {
    return (
        <>
            <h1 className="text-center">Nearby Attractions</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={pool} alt="Card image cap"/>
                            </div> 
                            <div className="flip-card-back">
                                <h1>DESCRIPTION</h1>
                                <p>DESCRIPTION will come here</p>
                                <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={pool} alt="Card image cap"/>
                            </div> 
                            <div className="flip-card-back">
                                <h1>DESCRIPTION</h1>
                                <p>DESCRIPTION will come here</p>
                                <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={pool} alt="Card image cap"/>
                            </div> 
                            <div className="flip-card-back">
                                <h1>DESCRIPTION</h1>
                                <p>DESCRIPTION will come here</p>
                                <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
        </>
    )
}

export default Rooms
