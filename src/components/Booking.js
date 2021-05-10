import React from "react";
import Bookingcss from "./Booking.module.css";

function Booking() {
  return (
    <div className={Bookingcss.container}>
      <h1 className={Bookingcss.topheadingrno}>Book Now</h1>
      <div className={Bookingcss.container2}>
        <div>
          <h1 className="text-center" className={Bookingcss.mrg}>
            Personal Details{" "}
          </h1>
          <div className="form-group">
            <label htmlFor="fullname"><sup>*</sup>Full Name :</label>
            <input
              type="text"
              className="form-control"
              id="fullname"
              className={Bookingcss.input}
              placeholder="Full Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email"><sup>*</sup>Email address :</label>
            <input
              type="email"
              className="form-control"
              className={Bookingcss.input}
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
              className={Bookingcss.input}
              placeholder="+91 xxxxxxxxxx"
              required
            />
          </div>
        </div>
<sup>*</sup>
        <div>
          <h1 className="text-center" className={Bookingcss.mrg}>
            Room Details
          </h1>
          <div className="form-group">
            <label htmlFor="duration"><sup>*</sup>Duration Of Stay :</label>
            <input
              type="number"
              className="form-control"
              className={Bookingcss.input}
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
              class="custom-select"
              id="roomtype"
              className={Bookingcss.input}
              required
            >
              <option selected>Single Room</option>
              <option value="Double Room">Double Room</option>
              <option value="Family Room">Family Room</option>
              <option value="Luxurious  Single Room">
                Luxurious Single Room
              </option>
              <option value="Luxurious  Double Room">
                Luxurious Double Room
              </option>
              <option value="Luxurious  Suite" className={Bookingcss.mrg}>
                Luxurious Suite
              </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="roomno"><sup>*</sup>Number of Rooms :</label>
            <input
              type="number"
              className="form-control"
              className={Bookingcss.input}
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
              className={Bookingcss.input}
              id="Checkin"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="checkout"><sup>*</sup>Chek Out Date :</label>
            <input
              type="date"
              className="form-control"
              className={Bookingcss.input}
              id="checkout"
              required
            />
          </div>
        </div>

        <div>
          <h1 className="text-center" className={Bookingcss.mrg}>
            Payment Details{" "}
          </h1>
          <div className="form-group">
            <label htmlFor="roomtype"><sup>*</sup>Identity Proof : </label>
            <select
              class="custom-select"
              id="identity"
              className={Bookingcss.input}
              required
            >
              <option selected>Adhar Card</option>
              <option value="Double Room">Driving license</option>
              <option value="Family Room">Passport</option>
            </select>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name=" Card Payment"
              id=" Card Payment"
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Card Payment
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Online Payment"
              id="Online Payment"
              checked
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Online Payment
            </label>
          </div>
        </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button class="btn btn-success me-md-2" type="button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Booking;
