import React from 'react'
/*import './Footer.css'*/

function Footer() {
    return (
        <footer className="page-footer font-small mdb-color pt-4 text-light bg-dark ">
        <div className="container text-center text-md-left">
            <div className="row text-center text-md-left mt-3 pb-3">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">Team Paradise</h5>
                <p>
                        <p>Komalpreet Kaur -1910991415</p>
                        <p></p>
                        <p>Vartika Srivastava - 1910991382</p>
                        <p></p>
                        <p>Ayush Mahajan - 1910991398</p>
                        <p></p>
                        <p>Yashveer Mehra - 1910991381</p>
                </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">LANGUAGES USED</h5>
                <p>
                <a to="#!">Bootstrap</a>
                </p>
                <p>
                <a to="#!">React JS</a>
                </p>
                <p>
                <a to="#!">HTML</a>
                </p>
                <p>
                <a to="#!">CSS</a>
                </p>
            </div>

            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">GitHub Link</h5>
                <p></p>
                <a to="https://github.com/kkaur1813">Komalpreet Kaur</a>
                <p></p>
                <p>
                <a to="#!">Vartika Srivastava</a>
                </p>
                <p>
                <a to="#!">Ayush Mahajan</a>
                </p>
                <p>
                <a to="#!">Yashveer Mehra</a>
                </p>
            </div>
            <hr className="w-100 clearfix d-md-none" />
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 font-weight-bold">Contact</h5>
                <p>
                <i className="fas fa-home mr-3"></i> Jaipur, India</p>
                <p>
                <i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p>
                <i className="fas fa-phone mr-3"></i> +91 9** *** ****</p>
                <p>
                <i className="fas fa-print mr-3"></i> +91 7** *** **** </p>
            </div>

            
            {/* <div className="col-md-5 col-lg-4 ml-lg-0">
                <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-twitter"></i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-google-plus-g"></i>
                    </a>
                    </li>
                    <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                    </li>
                </ul>
                </div>

            </div> */}

            </div>

        </div>

        </footer>
    )
}

export default Footer
