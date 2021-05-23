import React from 'react';
import img from './images/book2.jpg';

function Thank() {
    const bookStyle = {
        height: "100vh",
        width: "80%",
        marginTop: "50px",
        marginBottom: "50px",
        boxShadow: "10px 10px black",
        border: "2px solid black"
    }
    return (
        <div className="d-flex justify-content-center" data-aos="zoom-out">
            <img className="rounded" src={img} alt="Thank you" style={bookStyle}/>
        </div>
    )
}

export default Thank
