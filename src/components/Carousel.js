// Code for Bootstrap Carousel

import React from 'react'

export default function Carousel() {
    return (
        <div id="carouselExampleCaptions" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            </div>
            <div className="carousel-inner" id="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://i0.wp.com/myvoice.opindia.com/wp-content/uploads/sites/3/2020/04/environment.jpg?w=825&ssl=1" className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h2>Our Nature</h2>
                        <h5>Nature, in the broadest sense, is the natural, physical, material world or universe. It can refer to the phenomena of the physical world and life.</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://ec.europa.eu/jrc/sites/default/files/styles/normal-responsive/public/adobestock_42081491.jpeg?itok=411wU4zD" className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h2>Soil Degradation</h2>
                        <h5>It is defined as a change in the soil health status resulting in a diminished capacity of the ecosystem to provide services for its beneficiaries.</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.pixabay.com/photo/2017/04/23/19/17/climate-change-2254711_1280.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h2>Global Warming</h2>
                        <h5>Global warming is the long-term heating of Earth's climate system observed since the pre-industrial period due to human activities.</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQ5GWuw_N5yIb7uYj-Q098f_rTrkB8kCeog&usqp=CAU" className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h2>Water Disposal</h2>
                        <h5>Collection and removal of wastewater deriving from industrial and urban settlements by means of a system of pipes and treatment plants.</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBby7hzEzj6jqpr0xLCcp2nHvtkDJhKKgT1Q&usqp=CAU" className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h2>Deforestation</h2>
                        <h5>Deforestation or forest clearance is the removal of a forest or stand of trees from land that is then converted to non-forest use.</h5>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://live.staticflickr.com/1869/42811160360_6a69aff21e_b.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption">
                        <h2>Pollution</h2>
                        <h5>Pollution is the introduction of contaminants into the natural environment that cause adverse change. Pollutants damage air, water, and land.</h5>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
