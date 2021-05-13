import React from 'react'
import './Signup.css'

export default function Signup() {
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
                                         <input id="user" type="text" className="input" placeholder="Enter your username" /> 
                                    </div>

                                    <div className="group"> 
                                        <label htmlFor="pass" className="label">Password</label>
                                        <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" />
                                    </div>

                                    <div className="group"> 
                                        <input id="check" type="checkbox" className="check" /> 
                                        <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label> 
                                    </div>

                                    <div className="group"> 
                                        <input type="submit" className="button" value="Sign In" /> 
                                    </div>

                                    <div className="hr"></div>

                                    <div className="foott"> 
                                        <label className="fs-6">Forgot Password</label> 
                                    </div>
                                </div>

                                <div className="sign-up-form">
                                    <div className="group"> 
                                        <label htmlFor="user" className="label">Username</label> 
                                        <input id="user" type="text" className="input" placeholder="Create your Username" /> 
                                    </div>

                                    <div className="group"> 
                                        <label htmlFor="pass" className="label">Password</label> 
                                        <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password" /> 
                                    </div>

                                    <div className="group"> 
                                        <label htmlFor="pass" className="label">Repeat Password</label> 
                                        <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password" /> 
                                    </div>

                                    <div className="group"> 
                                        <label htmlFor="pass" className="label">Email Address</label> 
                                        <input id="pass" type="text" className="input" placeholder="Enter your email address" /> 
                                    </div>

                                    <div className="group"> 
                                        <input type="submit" className="button" value="Sign Up" /> 
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
