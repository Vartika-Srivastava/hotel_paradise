import React from 'react'
import './Signup.css'
import {useState} from 'react'


export default function Signup() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [rpass, setRpass] = useState("");
    const [email, setEmail] = useState("");

    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);
    const [rpassErr, setRpassErr] = useState(false);
    const [emailErr, setEmailErr] = useState(false);

    function loginHandle(e) {
        e.preventDefault();
        if(user.length === 0 || password.length === 0)
        {
            alert("Please complete the form")
        }
        else if(user.length<3 || password.length<5)
        {
            alert("Invalid inputs")
        }
        else{
            alert("Login Successfull");
            setUser("");
            setPassword("");
        }
    }

    function signupHandle(e) {
        e.preventDefault();
        if(user.length === 0 || password.length === 0 || email.length === 0 || rpass.length === 0)
        {
            alert("Please complete the form")
        }
        else if(user.length<3 || password.length<5 || rpass !== password)
        {
            alert("Invalid inputs")
        }
        else{
            alert("Account successfully created");
            setUser("");
            setPassword("");
            setRpass("");
            setEmail("");
        }
    }

    function userHandle(e) {
        let name = e.target.value;
        var reg = /^[a-zA-Z]+$/
        if(!(name.match(reg)))
        {
            setUserErr(true);
        }
        else if(name.length < 3)
        {
            setUserErr(true);
        }
        else{
            setUserErr(false);
        }
        setUser(name);
    }

    function passHandle(e) {
        let pass = e.target.value;
        if(pass.length < 5)
        {
            setPassErr(true);
        }
        else{
            setPassErr(false);
        }
        setPassword(pass);
    }

    function rpassHandle(e) {
        let rpass = e.target.value;
        let pass = password;
        if(rpass !== pass)
        {
            setRpassErr(true);
        }
        else{
            setRpassErr(false);
        }
        setRpass(rpass);
    }

    function emailHandle(e) {
        var mailformat =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!(e.target.value.match(mailformat)))
        {
            setEmailErr(true);
        }
        else{
            setEmailErr(false);
        }
        setEmail(e.target.value);
    }

    return (
        <div className="row" data-aos="zoom-out-up">
            <div className="col-md-6 mx-auto ">
                <div className="card card1">
                    <div className="login-box">
                        <div className="login-snip">
                            <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
                            <label htmlFor="tab-1" className="tab">Login</label>
                            <input id="tab-2" type="radio" name="tab" className="sign-up" />
                            <label htmlFor="tab-2" className="tab">Sign Up</label>

                            <div className="login-space">
                                    <div className="login">
                                        <div className="group">
                                            <label htmlFor="user" className="label">Username</label>
                                            <input id="user" type="text" name="user" value={user} className="input" placeholder="Enter your username" onChange={userHandle} />
                                            {userErr? <span className="error text-danger">Username invalid</span> : ""}
                                        </div>

                                        <div className="group"> 
                                            <label htmlFor="pass" className="label">Password</label>
                                            <input id="password" type="password" name="password" value={password} className="input" data-type="password" placeholder="Enter your password" onChange={passHandle} />
                                            {passErr? <span className="error text-danger">Password should be greater than 5 characters</span> : ""}
                                        </div>

                                        <div className="group"> 
                                            <input id="check" type="checkbox" className="check" /> 
                                            <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label> 
                                        </div>

                                        <div className="group"> 
                                        <button type="button" className="button btn btn-primary" onClick={loginHandle}>submit</button>
                                        </div>

                                        <div className="hr"></div>

                                        <div className="foott"> 
                                            <label className="fs-6">Forgot Password</label> 
                                        </div>
                                    </div>
                                    <div className="sign-up-form">
                                        <div className="group"> 
                                            <label htmlFor="user" className="label">Username</label> 
                                            <input id="suser" type="text" name="suser" value={user} className="input" placeholder="Create your Username" onChange={userHandle}/> 
                                            {userErr? <span className="error text-danger">Username invalid</span> : ""}
                                        </div>

                                        <div className="group"> 
                                            <label htmlFor="pass" className="label">Password</label> 
                                            <input id="spass" type="password" name="spass" value={password} className="input" data-type="password" placeholder="Create your password" onChange={passHandle}/> 
                                            {passErr? <span className="error text-danger">Password should be greater than 5 characters</span> : ""}
                                        </div>

                                        <div className="group"> 
                                            <label htmlFor="pass" className="label">Repeat Password</label> 
                                            <input id="rspass" type="password" name="rspass" value={rpass} className="input" data-type="password" placeholder="Repeat your password" onChange={rpassHandle} /> 
                                            {rpassErr? <span className="error text-danger">Password doesn't match</span> : ""}
                                        </div>

                                        <div className="group"> 
                                            <label htmlFor="pass" className="label">Email Address</label> 
                                            <input id="email" type="email" name="email" value={email} className="input" placeholder="Enter your email address" onChange={emailHandle} /> 
                                            {emailErr? <span className="error text-danger">Incorrect Email Id</span> : ""}
                                        </div>

                                        <div className="group"> 
                                            <button type="button" className="button btn btn-primary" onClick={signupHandle}>submit</button>
                                        </div>

                                        <div className="hr"></div>

                                        <div className="foott"> 
                                            <label htmlFor="tab-1">Already Member?</label> 
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
