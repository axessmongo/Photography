import React from 'react'
import fb from '../Assets/images/fb.png'
import insta from '../Assets/images/insta.png'
import twitter from '../Assets/images/twitter.png'
import whatsapp from '../Assets/images/whatsapp.png'
import youtube from '../Assets/images/youtube.png'

export default function Footer() {
    return (
        <div>
            <section className='py-3' id='contact'>
                <div className='footer-bg py-3'>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-md-3 '>
                            <div className='text-center'>
                                {/* <img src={logo1} alt="" className='img-fluid w-50' /> */}
                            </div>
                        </div>
                        <div className='col-md-3 text-center text-light heading7 foot'>
                            <h3 style={{ color: ' #f7bc35' }}>Let's Talk</h3>
                            <h4>xxx@gmail.com</h4>
                            <h4>xxxxx xxxxx</h4>
                        </div>
                        <div className='col-md-3 text-center text-light heading7 foot'>
                            <h3 className='pb-3' style={{ color: ' #f7bc35' }}>Quick Link</h3>
                            <p> Wedding</p>
                            <p>Pre-wedding Shoot</p>
                            <p>Baby Shower</p>
                            <p>Engagement</p>
                            <p>Reception</p>
                        </div>

                        <div className='col-md-3'>
                            <div className=' text-center'>

                                <img src={fb} alt="" className='img-fluid footer-icon' />

                                <img src={insta} alt="" className='img-fluid footer-icon' />

                                <img src={twitter} alt="" className='img-fluid footer-icon' />

                                <img src={whatsapp} alt="" className='img-fluid footer-icon' />

                                <img src={youtube} alt="" className='img-fluid footer-icon' />

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
