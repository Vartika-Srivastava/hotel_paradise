import React from 'react'
import './Rooms.css'
import palace from './images/Rooms/palace.jpeg'
import historical from './images/Rooms/historical.jpeg'
import royal from './images/Rooms/royal.jpeg'
import grandroyal from './images/Rooms/grandroyal.jpeg'
import presidential from './images/Rooms/presidential.jpeg'
import luxury from './images/Rooms/luxury.jpg'

function Rooms() {
    return (
        <>
            <h1 className="text-center cap">Rooms Available</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={palace} alt="Card image cap"/>
                            </div> 
                            <div className="flip-card-back">
                                <h1>Palace Room </h1>
                                    <ul className="jai">
                                        <li>Newly renovated rooms</li>
                                         <li>rich in terms of textures and colors</li> 
                                        <li>A four poster bed or Twin bed</li> 
                                        <li>walk in wardrobes and a spacious bathroom</li> 
                                            <li> Size 46-51 Sq Mt.</li>
                                    </ul>
                                    <p className="text-center"><mark>Rs. 10,000 / Night.</mark></p>
                                <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={historical} alt="Card image cap"/>
                            </div> 
                            <div className="flip-card-back">
                                <h1>Historical Suite</h1>
                                <ul className="jai">
                                    <li>The suites are decorated with Rajasthani artwork</li> 
                                    <li>Transparent fabrics and have been recently renovated</li>
                                    <li>These suites have a cozy atmosphere with marble or wood floors</li>
                                    <li>These are 1-room suites divided into a living room and a bedroom.</li>
                                    <li> Size 65-70 Sq mt </li>                
                                </ul>    
                                <p className="text-center"><mark>Rs. 15,000 / Night.</mark></p>                            
                                
                                <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={royal} alt="Card image cap"/>
                            </div> 
                            <div className="flip-card-back">
                                <h1>Royal Suite </h1>
                                <ul className="jai">
                                    <li>Personal chambers of the Maharaja of Jaipur</li>
                                    <li>The décor with transports to the bygone era of the royalty</li>
                                    <li>These are 1 room suites divided into a living area and a bedroom.</li>
                                    <li>Size 102-107 Sq Mt.</li> 
                                </ul>
                                <p className="text-center"><mark>Rs. 22,000 / Night.</mark></p>
                                <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={grandroyal} alt="Card image cap"/>
                            </div> 
                            <div className="flip-card-back">
                                <h1>Grand Royal Suite</h1>
                                <ul className="jai">
                                    <li>personal chambers of the Royal family</li>
                                    <li>large French Windows over looking the gardens</li> 
                                    <li>These suites are equipped with a bedroom, drawing room and living room</li>
                                    <li> Size 139-144 Sq Mt.</li>
                                </ul>
                                <p className="text-center"><mark>Rs. 28,000 / Night.</mark></p>
                                <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={presidential} alt="Card image cap"/>
                            </div> 
                            <div className="flip-card-back">
                                <h1>Grand Presidential Suite</h1>
                                <ul className="jai">
                                    <li>It offers a large lounge overlooking the gardens</li>
                                    <li>A royal dining room and a master bedroom with dressing area</li>
                                    <li>Many international celebrities have had a memorable experience during their stay.</li>
                                    <li>Size 167 Sq Mt</li>
                                </ul>          
                                <p className="text-center"><mark>Rs. 35,000 / Night.</mark></p>
                                <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={luxury} alt="Card image cap"/>
                            </div> 
                            <div className="flip-card-back">
                                <h1>Luxury Room Garden View</h1>
                                <ul className="jai">
                                    <li>The Luxury Rooms are traditionally decorated with period furniture</li>
                                    <li>With garden view from the palace’s top floor</li>
                                    <li>They reflect old world charm.</li>
                                    <li>Size 180-200 Sq Mt</li>   
                                </ul>
                                <p className="text-center"><mark>Rs. 40,000 / Night.</mark></p>
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
