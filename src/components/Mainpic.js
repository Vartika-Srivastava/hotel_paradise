import React from 'react'
import img1 from './images/Main/Hotel2.jpg'
import img2 from './images/Main/rambagh.jpeg'
import img3 from './images/Main/rambagh2.jpeg'
import img5 from './images/Main/Paradisefood.jpg'

function Mainpic() {
    let mStyle = { 
        height: "645px"
    }
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up">

            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src={img1} className="d-block w-100 mimg" alt="..." style ={mStyle} />
                </div>

                <div className="carousel-item">
                <img src={img2} className="d-block w-100 mimg" alt="..." style ={mStyle} />
                </div>

                <div className="carousel-item">
                <img src={img3} className="d-block w-100 mimg" alt="..." style ={mStyle} />
                </div>

                <div className="carousel-item">
                <img src={img5} className="d-block w-100 mimg" alt="..." style ={mStyle} />
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
        </div>
    )
}

export default Mainpic
