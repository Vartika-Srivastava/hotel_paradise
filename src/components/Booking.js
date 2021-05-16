import React from "react";
import "./Booking.css";
import { useState } from "react";

function Booking() {
  const [uname, setUser] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [Day, setDay] = useState("");
  const [night, setNight] = useState("");
  const [rooms, setRooms] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  const [userErr, setUserErr] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [dayErr, setdayErr] = useState(false);
  const [nightErr, setnightErr] = useState(false);
  const [roomsErr, setRoomsErr] = useState(false);
  const [checkinErr, setCheckinErr] = useState(false);
  const [checkoutErr, setCheckoutErr] = useState(false);

  function BookingHandle(e) {
    e.preventDefault();
    if (
      uname.length === 0 ||
      phone.length === 0 ||
      email.length === 0 ||
      Day.length === 0 ||
      night.length === 0 ||
      rooms.length === 0 ||
      checkin.length === 0 ||
      checkout.length === 0 
    ) {
      alert("Please complete the form");
    } else if (uname.length < 3) {
      alert("Invalid inputs");
    } else if (phone.length != 10) {
      alert("Invalid phone");
    } else if (rooms > 10) {
      alert(" You can book maximum of 10 rooms ");
    } else if (Day > 30 || night > 30) {
      alert("Invalid days to stay");
    } else {
      alert("Booking Successfull see you soon! ");
    }
  }

  function unameHandle(e) {
    let name = e.target.value;
    if (name.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(name);
  }

  function phoneHandle(e) {
    let ph = e.target.value;
    if (ph.length > 10) {
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
  function dayHandle(e) {
    let Days = e.target.value;
    if (Days > 30 || Days.length == 0) {
      setdayErr(true);
    } else {
      setdayErr(false);
    }
    setDay(Days);
  }
  function nightHandle(e) {
    let nights = e.target.value;
    if (nights > 30) {
      setnightErr(true);
    } else {
      setnightErr(false);
    }
    setNight(nights);
  }

  function roomsHandle(e) {
    let room = e.target.value;
    if (room > 10) {
      setRoomsErr(true);
    } else {
      setnightErr(false);
    }
    setRooms(room);
  }
  function checkinHandle(e) {
    let chIn = e.target.value;
    if (chIn == 0) {
      setCheckinErr(true);
    } else {
      setCheckinErr(false);
    }
    setCheckin(chIn);
  }
  function checkoutHandle(e) {
    let chOut = e.target.value;
    if (chOut == 0 ) {
      setCheckoutErr(true);
    } else {
      setCheckoutErr(false);
    }
    setCheckout(chOut);
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
                Phone number with 7-9 and remaing 9 digit with 0-9
              </span>
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="room">
          <h1 className="text-center" className="mrg fnt">
            Room Details
          </h1>

          <div className="form-group">
            <label htmlFor="duration">
              <sup>*</sup>Days Of Stay :
            </label>
            <input
              id="Day"
              name="stay"
              type="number"
              className="form-control"
              className="input"
              min="0"
              max="31"
              placeholder="XX"
              onChange={dayHandle}
            />
            days
            <input
              id="night"
              name="saty"
              type="number"
              className="form-control"
              className="input"
              min="0"
              max="30"
              placeholder="XX"
              onChange={nightHandle}
            />
            nights
            {dayErr || nightErr ? (
              <span className="error text-danger"> Max value can be 30 </span>
            ) : (
              ""
            )}

          </div>

          <div className="form-group">
            <label htmlFor="roomtype">
              <sup>*</sup>Type of Room :{" "}
            </label>
            <select
              className="custom-select"
              id="roomtype"
              className="input"
              placeholder="Room"
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
              max="10"
              min="1"
              placeholder="XX"
              onChange={roomsHandle}
            />
          </div>
          {roomsErr ? (
              <span className="error text-danger"> Max of 10 rooms </span>
            ) : (
              ""
            )}

          <div className="form-group">
            <label htmlFor="checkin">
              <sup>*</sup>Check In Date :
            </label>
            <input
              id="Checkin"
              name="checkin"
              type="date"
              className="form-control"
              className="input"
              onChange={checkinHandle}
            />
            {checkinErr ? (
              <span className="error text-danger"> Max of 10 rooms </span>
            ) : (
              ""
            )}
          </div>

          <div className="form-group">
            <label htmlFor="checkout">
              <sup>*</sup>Chek Out Date :
            </label>
            <input
              id="checkout"
              name="checkout"
              type="date"
              className="form-control"
              className="input"
              onChange={checkoutHandle}
            />
            {checkoutErr ? (
              <span className="error text-danger"> Max of 10 rooms </span>
            ) : (
              ""
            )}
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
              <option selected disabled value="">
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
          <select className="custom-select input" id="identity" required>
            <option selected disabled value="">
              Choose...
            </option>
            <option>Cash</option>
            <option defaultValue="Double Room">UPI</option>
            <option defaultValue="Family Room">Card</option>
          </select>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="invalidCheck2"
            required 
          />
          <label className="form-check-label" htmlFor="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>

        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <button
            className="btn btn-success me-md-2"
            type="button"
            onClick={BookingHandle}
          >
            Submit
          </button>
        </div>
        <p className="dcur form-check text-center">
          <i>
            Feild marked with <b>*</b> are required.
          </i>{" "}
        </p>
      </form>
    </div>
  );
}

export default Booking;
