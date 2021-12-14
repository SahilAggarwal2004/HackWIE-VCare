import React from 'react'

export default function Home() {
    return (
        <>
            <div style={{ margin: "0", padding: "0", width: "100%" }}>
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
                <hr />
                <div className="container about" id="about">
                    <h1>ABOUT US</h1>
                    <p>
                        VCare is an independent organisation registered in India. We work to safeguard the earth— its plants, trees, and the natural systems on which all life depends. As the world's leading conservation organization, we collaborate with people around the world to develop and deliver innovative solutions that protect trees, Our mission is to conserve the lands and waters and grow more trees on which all life depends. To achieve this, we must boldly address the biodiversity and climate crises over the next decade. By maximizing our ability to affect change between now and 2030, we can shape a brighter future for people and our planet. We combine the power of more than three million members and online activists with the expertise of some 700 scientists, lawyers, and policy advocates across the globe to ensure the rights of all people to the air, the water, and the wild. Join us now!
                    </p>
                    <div className="team">
                        <h3 className='text-center'>Our Team</h3>
                        <div className="row">
                            <div className="col-md-3 info">
                                <img src="sample-stamp-grunge-texture-vector-260nw-1389188336.jpg" alt="" />
                                <h4>Tisha Gaur</h4>
                            </div>
                            <div className="col-md-3 info">
                                <img src="sample-stamp-grunge-texture-vector-260nw-1389188336.jpg" alt="" />
                                <h4>Sahil Aggarwal</h4>
                            </div>
                            <div className="col-md-3 info">
                                <img src="sample-stamp-grunge-texture-vector-260nw-1389188336.jpg" alt="" />
                                <h4>Shivansh Arora</h4>
                            </div>
                            <div className=" col-md-3 info">
                                <img src="sample-stamp-grunge-texture-vector-260nw-1389188336.jpg" alt="" />
                                <h4>Tarun Negi</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="places">
                    <div className="place1">
                        <img src="https://image.slidesharecdn.com/environmentalthreats-140226064002-phpapp01/95/environmental-threats-1-638.jpg?cb=1393397023" alt="" />
                        <div className="pcontent">
                            <h2>Threats</h2>
                            <p></p>
                            <button className="learn">Learn More </button>
                        </div>
                    </div>
                    <div className="place2">
                        <img src="https://cdnpreprodanteagroup.blob.core.windows.net/prod/media/resized/8/67bd1a07-b01b-4e52-aa33-592c2a6af0f2/1200x1200_environment1-min.jpg" alt="" />
                        <div className="pcontent">
                            <h2>Solutions</h2>
                            <p></p>
                            <button className="learn">Learn More </button>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <h1>EXPERIENCES</h1>
                <div className="row">
                    <div className="col-md-4 experiences-content">
                        <i className="fa fa-quote-left"></i>
                        <p>Working with VCare has been a great experience for me. Travelling around and spreading awareness, planting trees, and a lot more with all age groups from a 4th class kid to a retired person with the same agenda was a lot of fun!</p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <img src="sample-stamp-grunge-texture-vector-260nw-1389188336.jpg" alt="" />
                        <h5>Sean Parker</h5>
                        <hr />
                    </div>
                    <div className="col-md-4 experiences-content">
                        <i className="fa fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore beatae deleniti ipsa earum nostrum?
                            Doloribus, nostrum neque. Distinctio sint inventore obcaecati cupiditate odit. Non eaque eligendi quidem
                            accusamus libero error.
                        </p>
                        <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <img src="sample-stamp-grunge-texture-vector-260nw-1389188336.jpg" alt="" />
                        <h5>Mike Smith</h5>
                        <hr />
                    </div>
                    <div className="col-md-4 experiences-content">
                        <i className="fa fa-quote-left"></i>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore beatae deleniti ipsa earum nostrum?
                            Doloribus, nostrum neque. Distinctio sint inventore obcaecati cupiditate odit. Non eaque eligendi quidem
                            accusamus libero error.
                        </p>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star-half-o"></i>
                        </div>
                        <img src="sample-stamp-grunge-texture-vector-260nw-1389188336.jpg" alt="" />
                        <h5>Mabel Joe</h5>
                    </div>
                </div>
            </div>
            <hr />
            <h1>OUR PARTNERS</h1>
            <div className="partners">
                <div className="logos">
                    <img src="logo-godrej.png" alt="" />
                </div>
                <div className="logos">
                    <img src="logo-coca-cola.png" alt="" />
                </div>
                <div className="logos">
                    <img src="logo-oppo.png" alt="" />
                </div>
                <div className="logos">
                    <img src="logo-paypal.png" alt="" />
                </div>
                <div className="logos">
                    <img src="logo-philips.png" alt="" />
                </div>
                <div className="logos">
                    <img src="logo5.png" alt="" />
                </div>

            </div><div className="footer2">
                <p>
                    &copy; Copyright <b>VCare</b> | All rights reserved
                </p>
                <p>
                    <a href="https://facebook.com/#Nature" target="_blank" rel="noreferrer"><i className="fa fa-footer fa-facebook" /></a>
                    <a href="https://twitter.com/#Nature" target="_blank" rel="noreferrer"><i className="fa fa-footer fa-twitter" /></a>
                    <a href="https://pinterest.com/#Nature" target="_blank" rel="noreferrer"><i className="fa fa-footer fa-pinterest" /></a>
                    <a href="https://instagram.com/#Nature" target="_blank" rel="noreferrer"><i className="fa fa-footer fa-instagram" /></a>
                </p>
            </div>
        </>
    )
}
