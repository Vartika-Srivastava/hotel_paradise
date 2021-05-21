import React from 'react';
import img from './images/book3.jpg';

function thank() {
    const bookStyle = {
        height: "100vh",
        width: "80%",
        marginTop: "50px",
        marginBottom: "50px",
        boxShadow: "10px 10px black",
        border: "2px solid black"
    }
    return (
        <div className="d-flex justify-content-center" data-aos="fade-right">
            <img className="rounded" src={img} alt="Thank you" style={bookStyle}/>
        </div>
    )
}

export default thank
