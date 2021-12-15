import React from 'react'
import tisha from '../media/tisha.jpeg'
import sahil from '../media/sahil.jpeg'
import shivansh from '../media/shivansh.jpeg'
import tarun from '../media/tarun.jpg'

export default function About() {
    return (
        <div className="container text-center">
            <h1 className='my-3'>ABOUT US</h1>
            <p>
                VCare is an independent organisation registered in India. We work to safeguard the earth— its plants, trees, and the natural systems on which all life depends. As the world's leading conservation organization, we collaborate with people around the world to develop and deliver innovative solutions that protect trees, Our mission is to conserve the lands and waters and grow more trees on which all life depends. To achieve this, we must boldly address the biodiversity and climate crises over the next decade. By maximizing our ability to affect change between now and 2030, we can shape a brighter future for people and our planet. We combine the power of more than three million members and online activists with the expertise of some 700 scientists, lawyers, and policy advocates across the globe to ensure the rights of all people to the air, the water, and the wild.
            </p>
            <h5>Join us now!</h5>
            <hr />
            <h3>Our Team</h3>
            <div className="row">
                <div className="col-md-3 info">
                    <img src={tisha} alt="" />
                    <h4>Tisha Gaur</h4>
                </div>
                <div className="col-md-3 info">
                    <img src={sahil} alt="" />
                    <h4>Sahil Aggarwal</h4>
                </div>
                <div className="col-md-3 info">
                    <img src={shivansh} alt="" />
                    <h4>Shivansh Arora</h4>
                </div>
                <div className=" col-md-3 info">
                    <img src={tarun} alt="" />
                    <h4>Tarun Negi</h4>
                </div>
            </div>
        </div>
    )
}
