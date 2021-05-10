import React from "react";
import  "./Booking.css";

function Booking() {
  
  return (
    <div className="container">
      <h1 className="topheading">Book Now</h1>

      <div className="container2">

        <div className="personal">

          <h1 className="text-center mrg">
            Personal Details
          </h1>

          <div className="form-group">
            <label htmlFor="fullname"><sup>*</sup>Full Name :</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                className="input"
                placeholder="Full Name"
                required
              />
          </div>

          <div className="form-group">
            <label htmlFor="email"><sup>*</sup>Email address :</label>
              <input
                type="email"
                className="form-control"
                className="input"
                id="email"
                placeholder="xyz@gmail.com"
                required
              />
          </div>

          <div className="form-group">
            <label htmlFor="phone"><sup>*</sup>Phone Number :</label>
              <input
                type="text"
                className="form-control "
                id="phone"
                className="input"
                placeholder="+91 xxxxxxxxxx"
                required
              />
          </div>    
        </div>

        <div className="room">

          <h1 className="text-center" className="mrg">
            Room Details
          </h1>

          <div className="form-group">
            <label htmlFor="duration"><sup>*</sup>Duration Of Stay :</label>
              <input
                type="number"
                className="form-control"
                className="input"
                id="duration"
                min="0"
                max="31"
                placeholder="XX"
                required
              />
          </div>

          <div className="form-group">
            <label htmlFor="roomtype"><sup>*</sup>Type of Room : </label>
              <select
                className="custom-select"
                id="roomtype"
                className="input"
                required
              >
                <option >Single Room</option>
                <option defaultValue="Double Room">Double Room</option>
                <option defaultValue="Family Room">Family Room</option>
                <option defaultValue="Luxurious  Single Room">
                  Luxurious Single Room
                </option>
                <option defaultValue="Luxurious  Double Room">
                  Luxurious Double Room
                </option>
                <option defaultValue="Luxurious  Suite" className="mrg">
                  Luxurious Suite
                </option>
              </select>
          </div>

          <div className="form-group">
            <label htmlFor="roomno"><sup>*</sup>Number of Rooms :</label>
              <input
                type="number"
                className="form-control"
                className="input"
                id="roomno"
                max="10"
                min="1"
                placeholder="XX"
                required
              />
          </div>

          <div className="form-group">
            <label htmlFor="checkin"><sup>*</sup>Check In Date :</label>
              <input
                type="date"
                className="form-control"
                className="input"
                id="Checkin"
                required
              />
          </div>

          <div className="form-group">
            <label htmlFor="checkout"><sup>*</sup>Chek Out Date :</label>
              <input
                type="date"
                className="form-control"
                className="input"
                id="checkout"
                required
              />
          </div>
        </div>

        <div className="payment">

          <h1 className="text-center" className="mrg">
            Payment Details
          </h1>

          <div className="form-group">
            <label htmlFor="roomtype"><sup>*</sup>Identity Proof : </label>
              <select
                className="custom-select input"
                id="identity"
                required
              >
                <option >Adhar Card</option>
                <option defaultValue="Double Room">Driving license</option>
                <option defaultValue="Family Room">Passport</option>
              </select>
          </div>
          
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Payment"
              id="Card Payment"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Card Payment
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Payment"
              id="Online Payment"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Online Payment
            </label>
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-success me-md-2" type="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
