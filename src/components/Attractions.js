import React from 'react'
import './Attractions.css'
import img1 from './images/Attractions/CityPalace.jpg'
import img2 from './images/Attractions/Galtaji.jpg'
import img3 from './images/Attractions/HawaMahal.jpg'
import img4 from './images/Attractions/JaigarhFort.jpg'
import img5 from './images/Attractions/JalMahal.jpg'
import img6 from './images/Attractions/PannaMeenaKaKund.jpg'

function Attractions() {
    // let attStyle = {
    //     minHeight: "135vh",
    //     minWidth: "100%"
    // }
    return (
        <div /*style={attStyle}*/>
            <h1 className="text-center">Nearby Attractions</h1>

            <div className="card atimg">
                <div className="card-body">
                    <p className="card-text text-center fs-4">City Palace</p>
                </div>
                <img src={img1} className="card-img-bottom  att" alt="City Palace" /> 
            </div>

            <div className="card atimg">
                <div className="card-body">
                    <p className="card-text text-center fs-4">Galtaji</p>
                </div>
                <img src={img2} className="card-img-bottom att" alt="Galtaji" />            
            </div>

            <div className="card atimg">
                <div className="card-body">
                    <p className="card-text text-center fs-4">Hawa Mahal</p>
                </div>
                <img src={img3} className="card-img-bottom att" alt="Hawa Mahal" />            
            </div>

            <div className="card atimg">
                <div className="card-body">
                    <p className="card-text text-center fs-4">Jaigarh Fort</p>
                </div>
                <img src={img4} className="card-img-bottom att" alt="Jaigarh Fort" />            
            </div>

            <div className="card atimg">
                <div className="card-body">
                    <p className="card-text text-center fs-4">Jal Mahal</p>
                </div>
                <img src={img5} className="card-img-bottom att" alt="JalMahal" />            
            </div>

            <div className="card atimg">
                <div className="card-body">
                    <p className="card-text text-center fs-4">Panna Meena Ka Kund</p>
                </div>
                <img src={img6} className="card-img-bottom att" alt="Panna Meena Ka Kund" />            
            </div>

        </div>
    )
}

export default Attractions
