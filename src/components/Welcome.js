import React from 'react'
import { Link } from "react-router-dom";
import Typed from "react-typed";
import logo from "../media/logo.jpeg"

export default function Home() {
    const typed = ["Deforestation", "Pollution", "Global Warming", "Soil Degradation", "Waste Disposal", "And many more..."]

    return (
        <div className="container text-center">
            <div className="d-flex w-auto justify-content-center align-items-center" style={{ padding: "10vh" }}>
                <img src={logo} alt="" style={{ width: "10rem" }} />
                <div className='mx-4'>
                    <h1>VCare</h1>
                    <h4>We Care We Plant</h4>
                </div>
            </div>
            <h2>We help the World to deal with problems like </h2>
            <h1 style={{ color: 'green' }}>
                <Typed strings={typed} typeSpeed={100} backSpeed={100} loop />
            </h1>
            <Link className='btn button' to="/solution">Let's Save the World &#10148;</Link>
        </div>
    )
}
