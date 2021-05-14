import React from 'react'
import './Services.css'
import pool from './images/Services/pool.jpg'
import gym from './images/Services/gym.jpg'
import bar from './images/Services/bar.jpg'
import event from './images/Services/event.jpg'
import gaming from './images/Services/gaming.jpg'
import restro from './images/Services/restro.jpg'
import spa from './images/Services/spa.jpg'
import pet from './images/Services/pet.jpg'
import wifi from './images/Services/wifi.png'

function Services() {
    return (
        <>
            <h1 className="text-center top " data-aos="fade-up">Services</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                <div className="col" data-aos="fade-up">
                    <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                        <img className="card-img-top simg" src={pool} alt="Services"/>
                        <div className="card-body ">
                            <h5 className="card-title text-center fs-4 serv">Swimming Pool</h5>
                        </div>
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                        <img className="card-img-top simg" src={gym} alt="Services"/>
                        <div className="card-body">
                            <h5 className="card-title text-center fs-4 serv">GYM</h5>
                        </div>
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                        <img className="card-img-top simg" src={bar} alt="Services"/>
                        <div className="card-body">
                            <h5 className="card-title text-center fs-4 serv">BAR</h5>
                        </div>
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                        <img className="card-img-top simg" src={event} alt="Services"/>
                        <div className="card-body">
                            <h5 className="card-title text-center fs-4 serv">Event Hall</h5>
                        </div>
                    </div>
                </div>

                <div className="col" data-aos="fade-up"> 
                    <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                        <img className="card-img-top simg" src={gaming} alt="Services"/>
                        <div className="card-body">
                            <h5 className="card-title text-center fs-4 serv">Gaming</h5>
                        </div>
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                        <img className="card-img-top simg" src={restro} alt="Services"/>
                        <div className="card-body">
                            <h5 className="card-title text-center fs-4 serv">Restaurant</h5>
                        </div>
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                        <img className="card-img-top simg" src={spa} alt="Services"/>
                        <div className="card-body">
                            <h5 className="card-title text-center fs-4 serv">SPA</h5>
                        </div>
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                        <img className="card-img-top simg" src={pet} alt="Services"/>
                        <div className="card-body">
                            <h5 className="card-title text-center fs-4 serv">Pet House</h5>
                        </div>
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                        <img className="card-img-top simg" src={wifi} alt="Services"/>
                        <div className="card-body">
                            <h5 className="card-title text-center fs-4 serv">Free WI-FI</h5>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="line" data-aos="fade-up"/>
        </>
    )
}

export default Services
