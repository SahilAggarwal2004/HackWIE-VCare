import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import Navbar from './Navbar';

export default function Contact() {

    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <div className="container d-flex">
                <div className="login">
                    <form>
                        <h2>Reach out to us</h2>
                        <h4>Help us plant more trees</h4>
                        <div className="input-box">
                            <i className="fa fa-star fa-user"></i>
                            <input type="text" id="name" placeholder="Name" required />
                        </div>
                        <div className="input-box">
                            <i className="fa fa-star fa-envelope"></i>
                            <input type="email" id="email" placeholder="Email Id" required />
                        </div>
                        <div className="input-box">
                            <i className="fa fa-star fa-phone-square"></i>
                            <input type="tel" id="phone" placeholder="Mobile Number" required />
                        </div>
                        <div className="input-box">
                            <i className="fa fa-star fa-map-marker"></i>
                            <input type="text" id="region" placeholder="Region" required />
                        </div>
                        <button className="submit" style={{ marginTop: "0.25rem", display: "inline-block", border: "1.5px solid black" }} onClick={(event) => {
                            event.preventDefault()
                            navigate("/contact/success")
                        }}>Submit</button>
                        <button className="submit" style={{ marginTop: "0.25rem", display: "inline-block", border: "1.5px solid black" }} onClick={(event) => {
                            event.preventDefault()
                            navigate("/donate/success")
                        }}>Donate</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}
