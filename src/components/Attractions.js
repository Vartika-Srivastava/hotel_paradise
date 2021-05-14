import React from 'react'
import './Attractions.css'
import img1 from './images/Attractions/CityPalace.jpg'
import img2 from './images/Attractions/Galtaji.jpg'
import img3 from './images/Attractions/HawaMahal.jpg'
import img4 from './images/Attractions/jaigarh.jpg'
import img5 from './images/Attractions/JalMahal.jpg'
import img6 from './images/Attractions/nahargarh.jpg'

function Attractions() {
    return (
        <>
            <h1 className="text-center ahead" data-aos="fade-up">Nearby Attractions</h1>

            <div className="row row-cols-1 row-cols-md-3 g-4">

            <div className="col" data-aos="fade-up">
                    <a className="text-reset" target="_blank" href="https://www.google.co.in/maps/place/Nahargarh+Fort/@26.9373127,75.7980164,14z/data=!4m9!1m2!2m1!1sjaigarh+fort+jaipur!3m5!1s0x396db15cf347f3d1:0xaaaa6e617ae9e8b!8m2!3d26.9373127!4d75.8155259!15sChNqYWlnYXJoIGZvcnQgamFpcHVyWiMKDGphaWdhcmggZm9ydCITamFpZ2FyaCBmb3J0IGphaXB1cpIBCGZvcnRyZXNzmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVVJ6T1ZBemEwdFJFQUU">
                        <div className="card atimg">
                            <div className="card-body">
                                <p className="card-text text-center fs-4 aname">Nahargarh Fort</p>
                            </div>
                                <img src={img6} className="card-img-bottom att" alt="Nahargarh" />       
                        </div>
                    </a>
                </div>

                <div className="col" data-aos="fade-up">
                    <a className="text-reset" target="_blank" href="https://www.google.co.in/maps/place/Jaigarh+Fort/@26.961758,75.815926,14z/data=!4m9!1m2!2m1!1sjaigarh+fort+jaipur!3m5!1s0x396db1b1b15f49c7:0xbc19c49ec4a15381!8m2!3d26.9862055!4d75.8507213!15sChNqYWlnYXJoIGZvcnQgamFpcHVyWiMKDGphaWdhcmggZm9ydCITamFpZ2FyaCBmb3J0IGphaXB1cpIBF2hpc3RvcmljYWxfcGxhY2VfbXVzZXVtmgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5KYVdGeVprdDNFQUU">
                        <div className="card atimg">
                            <div className="card-body">
                                <p className="card-text text-center fs-4 aname">Jaigarh Fort</p>
                            </div>
                            <img src={img4} className="card-img-bottom att" alt="Jaigarh Fort" />            
                        </div>
                    </a>
                </div>

                <div className="col" data-aos="fade-up">
                    <a className="text-reset" target="_blank" href="https://www.google.co.in/maps/place/Jal+Mahal,+Amer,+Jaipur,+Rajasthan/@26.9649254,75.8339699,14z/data=!3m1!4b1!4m5!3m4!1s0x396db10189be64eb:0x9366ee1922c4a947!8m2!3d26.9656041!4d75.8592052">
                        <div className="card atimg">
                            <div className="card-body">
                                <p className="card-text text-center fs-4 aname">Jal Mahal</p>
                            </div>
                            <img src={img5} className="card-img-bottom att" alt="JalMahal" />            
                        </div>
                    </a>
                </div>

                <div className="col" data-aos="fade-up">
                    <a className="text-reset" target="_blank" href="https://www.google.co.in/maps/place/Galta+Ji,+Jaipur,+Rajasthan/@26.9157175,75.8544159,15z/data=!3m1!4b1!4m5!3m4!1s0x396db72ed4ce6729:0x606059b3168da8c1!8m2!3d26.9167901!4d75.8589031">
                        <div className="card atimg">
                            <div className="card-body">
                                <p className="card-text text-center fs-4 aname">Galtaji</p>
                            </div>
                            <img src={img2} className="card-img-bottom att" alt="Galtaji" />            
                        </div>
                    </a>
                </div>

                <div className="col" data-aos="fade-up">
                    <a className="text-reset" target="_blank" href="https://www.google.co.in/maps/place/Hawa+Mahal/@26.9239363,75.8245551,17z/data=!3m1!4b1!4m5!3m4!1s0x396db14b1bd30ba5:0x860e5d531eccb20c!8m2!3d26.9239062!4d75.8268874">
                        <div className="card atimg">
                            <div className="card-body">
                                <p className="card-text text-center fs-4 aname">Hawa Mahal</p>
                            </div>
                            <img src={img3} className="card-img-bottom att" alt="Hawa Mahal" />            
                        </div>
                    </a>
                </div>

                <div className="col" data-aos="fade-up">
                    <a className="text-reset" target="_blank" href="https://www.google.co.in/maps/place/City+Palace,+Jaipur/@26.9252414,75.8235617,17z/data=!4m12!1m6!3m5!1s0x396db40b8620b0c1:0x44801531017d7b60!2sCity+Palace,+Jaipur!8m2!3d26.9257713!4d75.8236581!3m4!1s0x396db40b8620b0c1:0x44801531017d7b60!8m2!3d26.9257713!4d75.8236581">
                        <div className="card atimg">
                            <div className="card-body">
                                <p className="card-text text-center fs-4 aname">City Palace</p>
                            </div>
                                <img src={img1} className="card-img-bottom  att" alt="City Palace" /> 
                        </div>
                    </a>
                </div>

            </div>
        </>
    )
}

export default Attractions
