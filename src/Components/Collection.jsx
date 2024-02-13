import React from 'react'
import Collection2 from '../Assets/images/collection2.jpeg'
import footer2 from '../Assets/images/footer2.jpeg'

export default function Collection() {
    return (
        <div>
            <section className='container  '>
                <div className="row">
                    <div className='text-center pt-3' >
                        <h5 className='mt-4 ' style={{ color: "#ecd5c5" }}>NEW</h5>
                        <h3 className='heading10 mt-3 '>Our Latest Collections</h3>
                    </div>
                    <div className="col-md-4 bg-6 mt-5 ">
                        <h3 className='heading12'>What makes US SMILE!</h3>
                        <p className='heading2 mt-4'>We believe in authentic as the main element to tell a true story through images and photography has always been an awe-inspiring field to mix up accurate techniques with our personal creative perception.</p>

                    </div>
                    <div className="col-md-6 mt-5 ">
                        <img src={Collection2} alt="" className='img-fluid ' />
                        </div>
                </div>

                <section className='container mt-5'>
                    <div>
                        <img src={footer2} alt="" className=''/>
                     
                        
                    </div>



                </section>
            </section>
        </div>
    )
}
