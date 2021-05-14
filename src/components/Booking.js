import React from "react";
import  "./Booking.css";

function Booking() {
  
  return (
    <div className="container cont" data-aos="zoom-out-up">
      <h1 className="topheading fnt">Book Now</h1>

      <div className="container2">

        <div className="personal">

          <h1 className="text-center mrg fnt">
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

          <h1 className="text-center" className="mrg fnt">
            Room Details
          </h1>

          <div className="form-group">
            <label htmlFor="duration"><sup>*</sup>Days Of Stay :</label>
              <input
                type="number"
                className="form-control"
                className="input"
                id="duration"
                min="0"
                max="31"
                placeholder="XX"
                required
              />days
              <input
                type="number"
                className="form-control"
                className="input"
                id="duration"
                min="0"
                max="31"
                placeholder="XX"
                required
              />nights
          </div>

          <div className="form-group">
            <label htmlFor="roomtype"><sup>*</sup>Type of Room : </label>
              <select
                className="custom-select"
                id="roomtype"
                className="input"
                required
              >
                <option >Room</option>
                <option defaultValue="Double Room">Double Room</option>
                <option defaultValue="Executive Club">Executive Club</option>
                <option defaultValue="Queen Room">Queen Room</option>
                <option defaultValue="King Room">King Room</option>
                <option defaultValue="Luxury Suite">Luxury Suite</option>
                <option defaultValue="Royal Suite">Royal Suite</option>
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

          <h1 className="text-center" className="mrg fnt">
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
              name="Pay"
              id="Card Payment"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Cash Payment
            </label>
          </div>

          <div className="form-check">
          <input
              className="form-check-input"
              type="radio"
              name="Pay"
              id="Online Payment"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Online Payment
            </label><br/>

            <div className="form-check form-check-inline">
              <input
                    className="form-check-input"
                    type="radio"
                    name="opay"
                    id="upi Payment"
                  />
              <label className="radio-inline fs-6" htmlFor="flexRadioDefault1">
                UPI Payment
              </label>
            </div>

            <div className="form-check form-check-inline">
              <input
                  className="form-check-input"
                  type="radio"
                  name="opay"
                  id="Card Payment"
                />
              <label className="form-check-label fs-6" htmlFor="flexRadioDefault1">
                Card Payment
              </label>
            </div>
          </div>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className="btn btn-success me-md-2" type="button">
            Submit
          </button>
        </div>
        <p className="dcur form-check text-center"><i>Feild marked with <b>*</b> are requires.</i> </p>
      </div>
    </div>
  );
}

export default Booking;
