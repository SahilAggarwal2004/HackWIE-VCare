import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate()
    return (
        <div class="container d-flex">
            <div class="login">
                <form onSubmit={(event) => {
                    event.preventDefault()
                    navigate("/contact/success")
                }}>
                    <h2>Reach out to us</h2>
                    <h4>Help us plant more trees</h4>
                    <div class="input-box">
                        <i class="fa fa-user"></i>
                        <input type="text" id="name" placeholder="Name" required />
                    </div>
                    <div class="input-box">
                        <i class="fa fa-envelope"></i>
                        <input type="email" id="email" placeholder="Email Id" required />
                    </div>
                    <div class="input-box">
                        <i class="fa fa-phone-square"></i>
                        <input type="tel" id="phone" placeholder="Mobile Number" required />
                    </div>
                    <div class="input-box">
                        <i class="fa fa-map-marker"></i>
                        <input type="text" id="region" placeholder="Region" required />
                    </div>
                    <button class="navbtn" style={{ marginTop: "0.25rem", display: "inline-block" }}>Submit</button>
                </form>
            </div>
        </div>
    )
}
