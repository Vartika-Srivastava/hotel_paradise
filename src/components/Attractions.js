import React from 'react'
import './Attractions.css'
import img1 from './images/Attractions/CityPalace.jpg'
import img2 from './images/Attractions/Galtaji.jpg'
import img3 from './images/Attractions/HawaMahal.jpg'
import img4 from './images/Attractions/JaigarhFort.jpg'
import img5 from './images/Attractions/JalMahal.jpg'
import img6 from './images/Attractions/PannaMeenaKaKund.jpg'

function Attractions() {
    return (
        <>
            <h1 className="text-center ahead" data-aos="fade-up">Nearby Attractions</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                <div className="col" data-aos="fade-up">
                    <div className="card atimg">
                        <div className="card-body">
                            <p className="card-text text-center fs-4">City Palace</p>
                        </div>
                        <img src={img1} className="card-img-bottom  att" alt="City Palace" /> 
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card atimg">
                        <div className="card-body">
                            <p className="card-text text-center fs-4">Galtaji</p>
                        </div>
                        <img src={img2} className="card-img-bottom att" alt="Galtaji" />            
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card atimg">
                        <div className="card-body">
                            <p className="card-text text-center fs-4">Hawa Mahal</p>
                        </div>
                        <img src={img3} className="card-img-bottom att" alt="Hawa Mahal" />            
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card atimg">
                        <div className="card-body">
                            <p className="card-text text-center fs-4">Jaigarh Fort</p>
                        </div>
                        <img src={img4} className="card-img-bottom att" alt="Jaigarh Fort" />            
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card atimg">
                        <div className="card-body">
                            <p className="card-text text-center fs-4">Jal Mahal</p>
                        </div>
                        <img src={img5} className="card-img-bottom att" alt="JalMahal" />            
                    </div>
                </div>

                <div className="col" data-aos="fade-up">
                    <div className="card atimg">
                        <div className="card-body">
                            <p className="card-text text-center fs-4">Panna Meena Ka Kund</p>
                        </div>
                        <img src={img6} className="card-img-bottom att" alt="Panna Meena Ka Kund" />            
                    </div>
                </div>

            </div>
        </>
    )
}

export default Attractions
