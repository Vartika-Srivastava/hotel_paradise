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
                    <a className="text-reset" href="https://getbootstrap.com">Bootstrap</a>
                    </p>
                    <p>
                    <a className="text-reset" href="https://reactjs.org/">React JS</a>
                    </p>
                    <p>
                    <a className="text-reset" href="https://www.w3schools.com/html/">HTML</a>
                    </p>
                    <p>
                    <a className="text-reset" href="https://www.w3schools.com/Css/">CSS</a>
                    </p>
                </div>

                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 col-xl-2 mx-auto mt-3">
                    <h5 className="dcur text-uppercase mb-3 font-weight-bold">GitHub Link</h5>
                    <p>
                    <a className="text-reset" href="https://github.com/kkaur1813">Komalpreet Kaur</a>
                    </p>
                    <p>
                    <a className="text-reset" href="https://github.com/Vartika-Srivastava">Vartika Srivastava</a>
                    </p>
                    <p>
                    <a className="text-reset" href="https://github.com/Ayush210700">Ayush Mahajan</a>
                    </p>
                    <p>
                    <a className="text-reset" href="https://github.com/yashveer2902">Yashveer Mehra</a>
                    </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-3 col-xl-2 mx-auto mt-3">
                    <h5 className="dcur text-uppercase mb-3 font-weight-bold">Contact</h5>
                    <p className="dcur">
                    <i className="fas fa-home mr-3"></i> Jaipur, India</p>
                    <p className="dcur">
                    <i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                    <p className="dcur">
                    <i className="fas fa-phone mr-3"></i> +91 9** * **</p>
                    <p className="dcur">
                    <i className="fas fa-print mr-3"></i> +91 7** * ** </p>
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
