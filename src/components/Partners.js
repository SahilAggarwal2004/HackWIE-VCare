import React from 'react'
import tata from '../media/tata.png'

export default function Partners() {
    const images = [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Patanjali_Logo.svg/1200px-Patanjali_Logo.svg.png",
        "https://cdn.shopify.com/s/files/1/0272/4714/9155/files/logo-aboutus.png?1207",
        "https://guaranteecashback.com/wp-content/uploads/2021/02/mamaearth.png",
        tata]
    return (
        <div className='container'>
            <h1 className='text-center my-3 mb-5'>OUR PARTNERS</h1>
            <div className="row text-center">
                {images.map(element => {
                    return (
                        <div key={element} className='col-md-3'>
                            <img src={element} alt="" className='logos' />
                            <hr className='d-block d-md-none' />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}