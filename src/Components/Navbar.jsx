import React from 'react'
import { Link } from 'react-router-dom'

import logo1 from '../assets/images/logo1.png'
import img2 from '../assets/images/img2.jpeg'

function Navbar() {

    setTimeout(() => {
        let takeheight = document.querySelector('.about').clientHeight;
        let givenElement = document.querySelector('.givenheight');

        console.log(takeheight);

        if (givenElement) {
            givenElement.style.height = takeheight + 'px';
            console.log(givenElement.clientHeight);
        }
    }, 500);





    return (
        <div>
            <section className='nav-banner'>
                <nav class="navbar navbar-expand-lg nav-banner p-0" id='home'>
                    <div class="container-fluid">

                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent ">
                            <ul class="navbar-nav mx-auto  mb-lg-0 text-center  ">

                                <li class="nav-item heading7 ">
                                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav' href='#home'>Home</a>
                                </li>

                                <li class="nav-item heading7 ">
                                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav' href="#aboutus">About </a>
                                </li>



                                <li class="nav-item heading7">
                                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav' href="#technical">Technical</a>
                                </li>
                                <Link class="navbar-brand" to="#">
                                    <img src={logo1} alt=" navlogo" className='nav-logo img-fluid ' />
                                </Link>

                                <li class="nav-item heading7">
                                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav' href="#work">Work</a>
                                </li>

                                <li class="nav-item heading7 ">
                                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav' href="#testimonial">Testimonial</a>
                                </li>

                                <li class="nav-item heading7    ">
                                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav' href="#contact">Contact</a>
                                </li>



                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Nav-End */}



            </section>
            <section className='hero-banner vh-100'>

            </section>
            <section>
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xxl-4 col-lg-5 col-md-6 text-center">
                            <img src={img2} alt="" className='img-fluid givenheight' />

                        </div>
                        <div className="col-xxl-4 col-lg-5 col-md-6 about">
                            <div className='my-0 py-5 px-5 heading5' >
                                About us
                                <p className='mt-4 heading8'>Life can be crazy, shy, silly, glowing, sensual, teasing, flirting, quiet or playful and we are passionate about documenting spontaneous mood in an editorially style, while carefully creating authentic images that matter. We want to take pictures of you the way you are.

                                </p>
                                <div class="text2 mt-5"><h6> TimeZone</h6>
                                    <p className='heading1'>FOUNDER &amp; ARTIST</p></div>


                            </div>


                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Navbar