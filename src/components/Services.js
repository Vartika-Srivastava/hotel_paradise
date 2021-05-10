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
    // let serStyle = {
    //     minHeight: "200vh",
    //     minWidth: "100%"
    // }
    return (
        <div /*style={serStyle}*/>
            <h1 className="text-center top ">Services</h1>

            <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                <img className="card-img-top simg" src={pool} alt="Card image cap"/>
                <div className="card-body ">
                    <h5 className="card-title text-center fs-4">Swimming Pool</h5>
                </div>
            </div>

            <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                <img className="card-img-top simg" src={gym} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center fs-4">GYM</h5>
                </div>
            </div>

            <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                <img className="card-img-top simg" src={bar} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center fs-4 ">BAR</h5>
                </div>
            </div>

            <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                <img className="card-img-top simg" src={event} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center fs-4 ">Event Hall</h5>
                </div>
            </div>

            <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                <img className="card-img-top simg" src={gaming} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center fs-4 ">Gaming</h5>
                </div>
            </div>

            <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                <img className="card-img-top simg" src={restro} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center fs-4">Restaurant</h5>
                </div>
            </div>

            <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                <img className="card-img-top simg" src={spa} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center fs-4">SPA</h5>
                </div>
            </div>

            <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                <img className="card-img-top simg" src={pet} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center fs-4">Pet House</h5>
                </div>
            </div>

            <div className="card shadow p-3 mb-5 bg-white rounded scard">    
                <img className="card-img-top simg" src={wifi} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title text-center fs-4">Free WI-FI</h5>
                </div>
            </div>
        </div>
    )
}

export default Services
