import React from 'react'
import collection1 from '../assets/images/collection1.jpeg'

export default function Latest() {
    return (
        <div>
            <section className='container-fluid'>
                <div className='row marriage-bg'>
                    <div className='col-md-5 d-flex justify-content-center align-items-center'>
                        <div>
                            <h1 className='marriage-text'>
                                <h2> PHOTO & VIDEO </h2>
                                <h1>PACKAGES</h1>
                                <h3>CRAFTING YOUR MOMENTS</h3>
                            </h1>
                        </div>
                    </div>

                </div>
                <div className='container  bg-3'>
                    <div className="row">
                        <div className="col-md-5 ">
                            <h5 className='heading5 mt-4 text-2' style={{ color: " #ecd5c5" }}>FUN OVERLOADED</h5>
                            <p className=' heading4 mt-4'>EVERLASTING MOMENTS</p>
                            <p className='heading2'>A TEAM OF EXTREMELY TALENTED AND PASSIONATE PHOTOGRAPHERS, VIDEOGRAPHERS, AND DESIGNERS, BRING TOGETHER THE BEST OF BOTH CONTEMPORARY CANDID STORY TELLING AND TRADITIONAL SENSE OF ART, AT
                                YOUR SERVICE.</p>
                            <p className='heading2'>WE TAKE SO MUCH JOY AND PLEASURE IN WHAT WE DO AND WE ABSOLUTELY LOVE EACH AND EVERY STEP IN IT. WE CONSIDER THAT AS ONE OF OUR GREATEST ASSET. ALONG WITH CAPTURING EVERLASTING MOMENTS FOR WEDDINGS,
                                WE ALSO EXTEND OUR SERVICES TO WEDDING AND ALLIED EVENTS, BABY SHOWER, NEW BORN SHOOTS, ARANGETRAMS, BIRTHDAYS AND CRADLE CEREMONIES</p>

                        </div>
                        <div className="col-md-5  mt-4 ">
                            <img src={collection1} alt="" className='img-fluid' />

                        </div>
                    </div>

                </div>
                <div className='container mt-5'>
                    <h3 className='heading10 mt-3 text-center' > SERVICE PACKAGES</h3>
                    <div>

                    </div>
                </div>
            </section>
        </div>
    )
}
