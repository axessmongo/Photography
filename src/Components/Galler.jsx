import React from 'react'
import gallery1 from '../Assets/image/gallery-1.png'
import gallery2 from '../Assets/image/gallery-2.png'
import gallert3 from '../Assets/image/gallery-3.png'
import gallert6 from '../Assets/image/gallery-6.jpg'
import gallert7 from '../Assets/image/gallery-7.jpg'
import gallert8 from '../Assets/image/gallery-8.jpg'
import gallery16 from '../Assets/image/gallery-16.jpg'
import gallery19 from '../Assets/image/gallery-19.jpg'
import gallery4 from '../Assets/image/gallery-4.png'
import gallery9 from '../Assets/image/gallery-9.jpg'
import gallery11 from '../Assets/image/gallery-11.jpg'
import marriage1 from '../Assets/image/marriage-img-1.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Galler() {
    AOS.init({
        // Add your AOS options here
      })
    return (
        <div>
            <section className='container text-31 '>
            <h5 className='pt-3 heading10 text-center'>Every Special Moments</h5>
                <div className='gallery-bg mt-4'>
                    <div className='text-center'>
                       <h1 className='text-light heading10'>Life</h1>
                    </div>
                </div>
                <div className='gallery-st-bg'>
                    <div className='row d-flex justify-content-center py-4 my-4'>
                        <div className='col-md-5 text-center'>
                            <div className='mb-3' data-aos="flip-up" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={gallery1} alt="" className='img-fluid w-75 border border-secondary p-2' />
                            </div>

                        </div>
                        <div className='col-md-5'>
                            <div className='' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={gallery2} alt="" className='img-fluid w-75 border border-secondary p-2' />
                            </div>
                            <h3 className='heading10 pt-2 text-center'>Sweet Memories</h3>
                            <div className=' text-end' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={gallert3} alt="" className='img-fluid w-75 border border-secondary p-2' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='gallery-md-bg'>
                    <div className='row d-flex justify-content-center py-4 my-4'>
                        <div className='col-md-5'>
                            <div className=' ' data-aos="flip-down" data-aos-duration="700" >
                                <img src={gallert6} alt="" className='img-fluid w-50 border border-secondary p-2' />
                            </div>
                            <div className='text-end pt-2' data-aos="flip-down" data-aos-duration="700" >
                                <img src={gallert7} alt="" className='img-fluid w-50 border border-secondary p-2' />
                            </div>
                            <div className='pt-2' data-aos="flip-down" data-aos-duration="700" >
                                <img src={gallert8} alt="" className='img-fluid w-50 border border-secondary p-2' />
                            </div>
                            <div className='text-end pt-2' data-aos="flip-down" data-aos-duration="700" >
                                <img src={gallery19} alt="" className='img-fluid w-50 border border-secondary p-2' />
                            </div>

                        </div>
                        <div className='col-md-5'>
                            <div className=''data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <h1 className='heading10 pb-2 pt-1'>Pre-Wedding Shoot</h1>
                            </div>
                            <div className='' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={gallery16} alt="" className='img-fluid border border-secondary p-2' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='gallery-end-bg'>
                    <div className='row d-flex justify-content-center pt-4'>
                        <div className='col-md-5'>
                            <div className='text-end' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={gallery4} alt="" className='img-fluid w-75 border border-5 p-1' />
                            </div>
                            <div className='pt-3 mb-3' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={gallery9} alt="" className='img-fluid w-75 border border-5 p-1' />
                            </div>
                        </div>
                        <div className='col-md-5'>
                            <div className='text-end' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={marriage1} alt="" className='img-fluid w-75 border border-5 p-1' />
                            </div>
                            <div className='pt-3' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                                <img src={gallery11} alt="" className='img-fluid w-75 border border-5 p-1' />
                            </div>
                            <h1 className='heading11 text-light'>Best Moments</h1>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}
