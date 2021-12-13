import React from 'react'
import { Link } from "react-router-dom";
import Typed from "react-typed";

export default function Home() {
    const typed = ["Deforestation", "Pollution", "Global Warming", "Soil Degradation", "Waste Disposal", "And many more..."]

    return (
        <div className="container" style={{ marginTop: "20vh" }}>
            <h2>We help the World deal with problems like </h2>
            <h1 style={{ color: 'green' }}>
                <Typed strings={typed} typeSpeed={100} backSpeed={100} loop />
            </h1>
            <button className="button">
                <Link to="/solution">Let's Save the World &#10148;</Link>
            </button>
        </div>
    )
}
