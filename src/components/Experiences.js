import React from 'react';
import sean from '../media/sean.png';
import mike from '../media/mike.jpeg';
import mabel from '../media/mabel.png';

export default function Experiences() {
    const review = [
        'Sean Parker:Working with VCare has been a great experience for me. Travelling around and spreading awareness, planting trees, and a lot more with all age groups from a 4th class kid to a retired person with the same agenda was a lot of fun!::' + sean,
        'Mike Smith:After seeing the current news on climate change, I decided to work with Vcare. They are spreading awareness among people on how to save our environment. Working with Vcare gives me satisfaction as I am contributing to save the Earth.::' + mike,
        'Mabel Joe:Being there in VCare team is so satisfying for me personally. It gives me a happy feeling of doing something for good cause and interacting with group of people of all types. My best wishes with VCare for making our planet Earth green.:-half-o:' + mabel]
    return (
        <div className="container">
            <h1 className='text-center my-3'>EXPERIENCES</h1>
            <div className="row d-flex">
                {review.map(element => {
                    element = element.split(':');
                    return (
                        <div key={element[0]} className="col-md-4">
                            <i className="fa fa-quote-left"></i>
                            <p>{element[1]}</p>
                            <div className="text-center exp">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className={`fa fa-star${element[2]}`}></i>
                                <br />
                                <img src={element[3]} alt="" />
                                <h5>{element[0]}</h5>
                            </div>
                            <hr className={`d-block ${!element[2] ? 'd-md-none' : 'd-none'}`} />
                        </div>
                    )
                })}
            </div>
        </div >
    )
}
