import React from 'react'
import video from "../media/bg.mp4"; // importing a video in react (same as importing an image)
import { Link } from "react-router-dom";
import Typed from "react-typed"; // importing react-typed as a component. react-typed is basically typed.js(a js library via which we can automate typing) but optimised for react
import logo from "../media/logo.jpeg"

export default function Home() {
    const typed = ["Deforestation", "Pollution", "Global Warming", "Soil Degradation", "Waste Disposal", "And many more..."]

    return (
        <>
            <div className="video-container">
                {/* video tag is used to render a video in html. autoplay(autoPlay in react) attribute autoplays the video. loop attribute runs the video in an infinite loop. muted attribute mutes the video. src attribute takes the source of video. type attribute takes the extension of the video */}
                <video autoPlay loop muted src={video} type="video/mp4" />
            </div>
            <div className="container text-center">
                <div className="d-flex w-auto justify-content-center align-items-center" style={{ padding: "10vh" }}>
                    <img src={logo} alt="" style={{ width: "9rem", borderRadius: "10%" }} />
                    <div className='mx-4'>
                        <h1>VCare</h1>
                        <h4>We Care We Plant</h4>
                    </div>
                </div>
                <h2>We help the World to deal with problems like </h2>
                <h1 style={{ color: 'green', fontSize: "3rem" }}>
                    {/* Typed is the component that we imported above and takes some props(which are almost equivalent to the attributes in typed.js). strings takes a list of string to be automatically typed. typeSpeed takes the typing speed. backSpeed take the speed for the text is being removed. loop attribute runs the typing in an infinite loop. */}
                    <Typed strings={typed} typeSpeed={100} backSpeed={100} loop />
                </h1>
                <Link className='btn button' to="/home">Let's Save the World &#10148;</Link>
            </div>
        </>
    )
}
