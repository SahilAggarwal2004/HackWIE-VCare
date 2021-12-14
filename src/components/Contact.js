import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate()
    return (
        <div className="container d-flex">
            <div className="login">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    navigate("/contact/success")
                }}>
                    <h2>Reach out to us</h2>
                    <h4>Help us plant more trees</h4>
                    <div className="input-box">
                        <i className="fa fa-user"></i>
                        <input type="text" id="name" placeholder="Name" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-envelope"></i>
                        <input type="email" id="email" placeholder="Email Id" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-phone-square"></i>
                        <input type="tel" id="phone" placeholder="Mobile Number" required />
                    </div>
                    <div className="input-box">
                        <i className="fa fa-map-marker"></i>
                        <input type="text" id="region" placeholder="Region" required />
                    </div>
                    <button className="submit" style={{ marginTop: "0.25rem", display: "inline-block", border: "1.5px solid black" }}>Submit</button>
                </form>
            </div>
        </div>
    )
}
