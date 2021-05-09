import React from 'react'
import './Attractions.css'
import img1 from './images/Attractions/CityPalace.jpg'
import img2 from './images/Attractions/Galtaji.jpg'
import img3 from './images/Attractions/HawaMahal.jpg'
import img4 from './images/Attractions/JaigarhFort.jpg'
import img5 from './images/Attractions/JalMahal.jpg'
import img6 from './images/Attractions/JhalanaLeopardSafari.jpg'
import img7 from './images/Attractions/PannaMeenaKaKund.jpg'

function Attractions() {
    return (
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={img1} className="d-block w-100 aimg" alt="City Palace" />
                    </div>

                    <div className="carousel-item">
                    <img src={img2} className="d-block w-100 aimg" alt="..." />
                    </div>

                    <div className="carousel-item">
                    <img src={img3} className="d-block w-100 aimg" alt="..." />
                    </div>

                    <div className="carousel-item">
                    <img src={img4} className="d-block w-100 aimg" alt="..." />
                    </div>

                    <div className="carousel-item">
                    <img src={img5} className="d-block w-100 aimg" alt="..." />
                    </div>

                    <div className="carousel-item">
                    <img src={img6} className="d-block w-100 aimg" alt="..." />
                    </div>

                    <div className="carousel-item">
                    <img src={img7} className="d-block w-100 aimg" alt="..." />
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>

            </div>
    )
}

export default Attractions
