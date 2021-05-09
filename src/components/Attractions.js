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
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">

            <div class="carousel-inner">

                <div className="carousel-item active">
                <img src={img1} className="d-block w-100 aimg" alt="City Palace" />
                </div>

                <div className="carousel-item">
                <img src={img2} className="d-block w-100 aimg" alt="Galtaji" />
                </div>

                <div className="carousel-item">
                <img src={img3} className="d-block w-100 aimg" alt="Hawa Mahal" />
                </div>

                <div className="carousel-item">
                <img src={img4} className="d-block w-100 aimg" alt="Jaigarh fort" />
                </div>

                <div className="carousel-item">
                <img src={img5} className="d-block w-100 aimg" alt="Jal Mahal" />
                </div>

                <div className="carousel-item">
                <img src={img6} className="d-block w-100 aimg" alt="Jhalana Leopard Safari" />
                </div>

                <div className="carousel-item">
                <img src={img7} className="d-block w-100 aimg" alt="Panna Meena Ka Kund" />
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>
    )
}

export default Attractions
