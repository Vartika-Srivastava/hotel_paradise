import React from "react";
import "./Booking.css";
import { useState } from "react";

function Booking() {
  const [uname, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [rooms, setRooms] = useState("");

  const [agree, setAgree] = useState(false);
  const [paym, setPaym] = useState({
    card: false,
    cash: false,
    upi: false
  });
  const [userErr, setUserErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [roomsErr, setRoomsErr] = useState(false);
  function BookingHandle(e) {
    e.preventDefault();
    if (
      uname.length === 0 ||
      phone.length === 0 ||
      email.length === 0 ||
      rooms.length === 0 
    ) 
    {
      alert("Fields Marked with * are Required");
    } 
    else if (uname.length < 3) {
      alert("Invalid inputs");
    } 
    else if (phone.length !== 10) {
      alert("Invalid phone");
    }
     else if (rooms > 6) {
      alert(" You can book maximum of 6 rooms ");
    }
     else {
      alert("Booking Successfull see you soon! ");
    }
  }

  function unameHandle(e) {
    let name = e.target.value;
    var reg = /^[a-zA-Z]+$/
    if(!(name.match(reg)))
    {
      setUserErr(true);
    }
    else if (name.length < 3) {
      setUserErr(true);
    } 
    else {
      setUserErr(false);
    }
    setUser(name);
  }

  function phoneHandle(e) {
    let ph = e.target.value;
    if (ph.length > 10 || ph.length < 10) {
      setPhoneErr(true);
    } else {
      setPhoneErr(false);
    }
    setPhone(ph);
  }

  function emailHandle(e) {
    var mailformat =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!e.target.value.match(mailformat)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(e.target.value);
  }

  function roomsHandle(e) {
    let room = e.target.value;
    if (room > 6) {
      setRoomsErr(true);
    } 
    else {
      setRoomsErr(false);
    }
    setRooms(room);
  }
  
  function payHandle(e){
    let meth = e.target.value;
    if(meth === "UPI"){
      setPaym({
        card: false,
        cash: false,
        upi: true
      });
    }
    else if(meth === "Cash"){
      setPaym({
        card: false,
        cash: true,
        upi: false
      });
    }
    else if(meth === "Card"){
        setPaym({
          card: true,
          cash: false,
          upi: false
        });
      }
  }

  function termHandle() {
    setAgree(!agree);
  }

  return (
    <div className="container cont" data-aos="zoom-out-up">
      <h1 className="topheading fnt">Book Now</h1>

      <form className="container2">
        <div className="personal">
          <h1 className="text-center mrg fnt">Personal Details</h1>

          <div className="form-group">
            <label htmlFor="fullname">
              <sup>*</sup>Full Name :
            </label>
            <input
              type="text"
              className="form-control"
              id="uname"
              name="uname"
              className="input"
              placeholder="Full Name"
              onChange={unameHandle}
            />
            {userErr ? (
              <span className="error text-danger">Enter valid full name</span>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <sup>*</sup>Email address :
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="form-control"
              className="input"
              placeholder="xyz@gmail.com"
              title="invalid email"
              onChange={emailHandle}
            />
            {emailErr ? (
              <span className="error text-danger">Invaild Email</span>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <sup>*</sup>Phone Number :
            </label>
            <input
              id="phone"
              type="number"
              name="phone"
              className="form-control "
              className="input"
              placeholder="+91 xxxxxxxxxx"
              onChange={phoneHandle}
            />
            {phoneErr ? (
              <span className="error text-danger">
                Invalid Phone Number
              </span>
            ) : ""}
          </div>
        </div>

        <div className="room">
          <h1 className="text-center" className="mrg fnt">
            Room Details
          </h1>

          <div className="form-group">
            <label htmlFor="checkin">
              <sup>*</sup>Check In Date :
            </label>
            <input
              id="Checkin"
              name="checkin"
              type="date"
              min="2021-01-01"
              max="2030-01-01"
              className="form-control"
              className="input"
            />

          </div>

          <div className="form-group">
            <label htmlFor="checkout">
              <sup>*</sup>Chek Out Date :
            </label>
            <input
              id="checkout"
              name="checkout"
              type="date"
              min="2021-01-01"
              max="2030-01-01"
              className="form-control"
              className="input"
            />

          </div>

          <div className="form-group">
            <label htmlFor="roomtype">
              <sup>*</sup>Type of Room :
            </label>
            <select
              className="custom-select"
              id="roomtype"
              className="input"
            >
              <option defaultValue="Double Room">Double Room</option>
              <option defaultValue="Executive Club">Executive Club</option>
              <option defaultValue="Queen Room">Queen Room</option>
              <option defaultValue="King Room">King Room</option>
              <option defaultValue="Luxury Suite">Luxury Suite</option>
              <option defaultValue="Royal Suite">Royal Suite</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="roomno">
              <sup>*</sup>Number of Rooms :
            </label>
            <input
              id="rooms"
              name="rooms"
              type="number"
              className="form-control"
              className="input"
              max="6"
              min="1"
              placeholder="XX"
              onChange={roomsHandle}
            />
            {roomsErr ?<span className="error text-danger"> Max 6 rooms </span> : ""}
          </div>

        </div>

        <div className="payment">
          <h1 className="text-center" className="mrg fnt">
            Payment Details
          </h1>

          <div className="form-group">
            <label htmlFor="roomtype">
              <sup>*</sup>Identity Proof :{" "}
            </label>
            <select className="custom-select input" id="identity" required>
              <option defaultValue disabled defaultValue="">
                Choose...
              </option>
              <option>Adhar Card</option>
              <option defaultValue="Double Room">Driving license</option>
              <option defaultValue="Family Room">Passport</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="roomtype">
            <sup>*</sup>Payment :{" "}
          </label>
          <select className="custom-select input" id="identity" onChange={payHandle} required>
            <option defaultValue="cash" name="cash">Cash</option>
            <option defaultValue="upi" name="upi">UPI</option>
            <option defaultValue="card" name="card">Card</option>
          </select><br/>
          {paym.upi?<span>
            <label htmlFor="upino" className="fs-6">&nbsp;&nbsp;UPI Id : </label>
              <input
                type="text"
                className="form-control"
                id="upino"
                name="upino"
                className="input"
                placeholder="Enter UPI Id"/>
            </span>
              : paym.card? <span>
              <label htmlFor="cardno" className="fs-6">&nbsp;&nbsp;Card details : </label>
              <input
                type="text"
                className="form-control"
                id="cardno"
                name="cardno"
                className="input"
                placeholder="Enter card number"
              /></span>:""
            }
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            defaultValue="t"
            id="agree"
            onChange={termHandle}
          />
          <label className="form-check-label" htmlFor="agree">
            I Agree to terms and conditions
          </label>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-success me-md-2"
            disabled={!agree}
            onClick={BookingHandle} 
          >
            Submit
          </button>
        </div>
        <p className="dcur form-check text-center">
          <i>
            Fields marked with <b>*</b> are required.
          </i>
        </p>
      </form>
    </div>
  );
}

export default Booking;
