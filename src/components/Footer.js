import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <footer className="foot pt-1 text-light bg-dark">
        <div className="container">
            <div className="rw row text-center mt-3 pb-3">
                <div className="col-md-3  mx-auto mt-3">
                    <h5 className="dcur text-uppercase mb-3 font-weight-bold">Team Paradise</h5>
                            <p className="dcur">Komalpreet Kaur -1910991415</p>
                            <p className="dcur">Vartika Srivastava - 1910991382</p>
                            <p className="dcur">Ayush Mahajan - 1910991398</p>
                            <p className="dcur">Yashveer Mehra - 1910991381</p>
                </div>

                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 col-xl-2 mx-auto mt-3">
                    <h5 className="dcur text-uppercase mb-3 font-weight-bold">LANGUAGES USED</h5>
                    <p>
                    <a className="text-reset" target="_blank" rel="noreferrer" href="https://www.w3schools.com/html/">HTML</a>
                    </p>
                    <p>
                    <a className="text-reset" target="_blank" rel="noreferrer" href="https://www.w3schools.com/Css/">CSS<br/>(Bootstrap)</a>
                    </p>
                    <p>
                    <a className="text-reset" target="_blank" rel="noreferrer" href="https://reactjs.org/">JavaScript<br/>(React Js)</a>
                    </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 col-xl-2 mx-auto mt-3">
                    <h5 className="dcur text-uppercase mb-3 font-weight-bold">GitHub Link</h5>
                    <p>
                    <a className="text-reset" target="_blank" rel="noreferrer" href="https://github.com/kkaur1813">Komalpreet Kaur</a>
                    </p>
                    <p>
                    <a className="text-reset" target="_blank" rel="noreferrer" href="https://github.com/Vartika-Srivastava">Vartika Srivastava</a>
                    </p>
                    <p>
                    <a className="text-reset" target="_blank" rel="noreferrer" href="https://github.com/Ayush210700">Ayush Mahajan</a>
                    </p>
                    <p>
                    <a className="text-reset" target="_blank" rel="noreferrer" href="https://github.com/yashveer2902">Yashveer Mehra</a>
                    </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 col-xl-2 mx-auto mt-3">
                    <h5 className="dcur text-uppercase mb-3 font-weight-bold">Contact Us </h5>

                    
                    
                    <a className="text-reset" target="_blank" rel="noreferrer" href="https://www.facebook.com">
                        <i className="fab fa-facebook-square fa-2x"></i> 
                    </a>
                    <br/>
                    <a className="text-reset" target="_blank" rel="noreferrer" href="https://www.instagram.com/">
                        <i className="fab fa-instagram fa-2x"></i> 
                    </a>
                    <br/>
                    <a className="text-reset" target="_blank" rel="noreferrer" href="https://www.Gmail.com">
                        <i className="fas fa-envelope fa-2x"></i> 
                    </a>
                    <br/>
                    <a className="text-reset" target="_blank" rel="noreferrer" href="#">
                        <i className="fas fa-phone-square-alt fa-2x"> </i>
                    </a>
                    
                </div>

                

                <div className="dcur text-center p-4 text-light bg-dark">
                    © 2021 Copyright:HOTEL PARADISE
                </div>

            </div>

        </div>

        </footer>
    )
}

export default Footer
