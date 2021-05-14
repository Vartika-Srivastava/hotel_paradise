import React from 'react'
import './Rooms.css'
import {Link} from "react-router-dom";
import double from './images/Rooms/Double-room-003.jpg'
import Queen from './images/Rooms/queen.jpeg'
import royal from './images/Rooms/RoyalSuite.jpg'
import Executive from './images/Rooms/executive.jpeg'
import luxury from './images/Rooms/luxurysuite.jpg'
import grandroyal from './images/Rooms/grandroyal.jpeg'

function Rooms() {
    return (
        <>
            <h1 className="text-center cap" data-aos="fade-up">Rooms Available</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                <div className="col" data-aos="fade-up">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={double} alt="Room types"/>
                            </div> 
                            <div className="flip-card-back back">
                                <h1>Double Room </h1>
                                    <ul className="jai">
                                        <li>Upto 2 Guests allowed</li>
                                        <li>One large bed</li> 
                                        <li>Rich in terms of textures and colors</li> 
                                        <li>Walk in wardrobes and a spacious bathroom</li> 
                                        <li>Size 46-51 Sq Mt.</li>
                                    </ul>
                                    <p className="text-center"><mark>Rs. 5,000 / Night.</mark></p>
                                <Link to="/booking">
                                    <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                                </Link>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={Executive} alt="Room types"/>
                            </div> 
                            <div className="flip-card-back back">
                                <h1>Executive Club</h1>
                                <ul className="jai">
                                    <li>Upto 3 Guests allowed</li>
                                    <li>A spacious room with king bed, an enthralling view and an expansive bathroom.</li> 
                                    <li>Rich in terms of textures and colors</li>
                                    <li>Size 70-80 Sq Mt</li>   
                                </ul>
                                <p className="text-center"><mark>Rs. 12,000 / Night.</mark></p>
                                <Link to="/booking">
                                    <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                                </Link>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={Queen} alt="Room types"/>
                            </div> 
                            <div className="flip-card-back back">
                                <h1>Queen Room</h1>
                                <ul className="jai">
                                    <li>Upto 2 Guests allowed</li>
                                    <li>Queen room divided into a living room and a bedroom with queen size bed.</li>
                                    <li>The suites are decorated with Rajasthani artwork</li>
                                    <li> Size 65-70 Sq mt </li>                
                                </ul>    
                                <p className="text-center"><mark>Rs. 18,000 / Night.</mark></p>
                                <Link to="/booking">
                                    <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                                </Link>
                            </div>
                        </div> 
                    </div> 
                </div>

                

                <div className="col" data-aos="fade-up">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={grandroyal} alt="Room types"/>
                            </div> 
                            <div className="flip-card-back back">
                                <h1>King Room</h1>
                                <ul className="jai">
                                    <li>Upto 3 Guests allowed</li>
                                    <li>King room divided into a living room and a bedroom with king size bed.</li>
                                    <li>The king rooms are decorated with Rajasthani artwork</li>
                                    <li>Large French Windows over looking the gardens</li> 
                                    <li>Size 139-144 Sq Mt.</li>
                                </ul>
                                <p className="text-center"><mark>Rs. 25,000 / Night.</mark></p>
                                <Link to="/booking">
                                    <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                                </Link>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={luxury} alt="Room types"/>
                            </div> 
                            <div className="flip-card-back back">
                                <h1>Luxury Suite</h1>
                                <ul className="jai">
                                    <li>Upto 4 Guests allowed</li>
                                    <li>The suites are decorated with Rajasthani artwork.</li>
                                    <li>With elegant, stylish and super luxurious interiors.</li>
                                    <li>A Sitting room and a master bedroom with dressing area.</li>
                                    <li>Size 139-144 Sq Mt.</li>
                                </ul>          
                                <p className="text-center"><mark>Rs. 40,000 / Night.</mark></p>
                                <Link to="/booking">
                                    <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                                </Link>
                            </div>
                        </div> 
                    </div> 
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="card-img-top rimg" src={royal} alt="Room types"/>
                            </div> 
                            <div className="flip-card-back back">
                                <h1>Royal Suite </h1>
                                <ul className="jai">
                                    <li>Upto 4 Guests allowed</li>
                                    <li>The interior of Royal suites are richly decorated</li>
                                    <li>Separated sitting room and a master bedroom with dressing area.</li>
                                    <li>Exclusive complimentary services like Chauffeur service, butler service etc</li>
                                    <li>Size 200-250 Sq Mt.</li> 
                                </ul>
                                <p className="text-center"><mark>Rs. 1,20,000 / Night.</mark></p>
                                <Link to="/booking">
                                    <button className="btn btn-primary me-md-2" type="button">Book Now</button>
                                </Link>
                            </div>
                        </div> 
                    </div> 
                </div>
            </div>
            <hr className="line" data-aos="fade-up"/>
        </>
    )
}

export default Rooms
