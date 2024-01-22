import React from 'react'
import cmp1 from '../assets/images/cmp1.png'
import cmp3 from '../assets/images/cmp3.jpg'
// import img1 from '../assets/images/img1.jpg'
import video1 from '../assets/images/video1.mp4'
import video2 from '../assets/images/video2.mp4'
import temple from '../assets/image/temple.png'
import events from '../assets/images/events.jpg'
import collection1 from '../assets/image/collection1.jpeg'
import { Link } from 'react-router-dom'


export default function Stories() {
    let gotoTop = (secID) => {
        const element = document.getElementById(secID);
        const navbarElement = document.querySelector('.navbar');

        if (navbarElement) {
            var navHeight = navbarElement.clientHeight;
            // Use navHeight as needed
        }
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });

        }

    }
    gotoTop();
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
        <div className=''>
            <nav className="navbar navbar-expand-lg nav-banner  p-0 z-3" id='home' style={{ backgroundColor: '#060525' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-3 p-2 mb-lg-0 text-center">
                            <li className="nav-item heading7">
                                <Link className="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('home')}>Home</Link>
                            </li>
                            <li className="nav-item heading7">
                                <Link className="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('about')}>About</Link>
                            </li>
                            <li className="nav-item heading7">
                                <Link className="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('moments')}>Moments</Link>
                            </li>
                            <li class="nav-item heading7">
                                <Link class="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('packages')}>Packages</Link>
                            </li>
                            <li className="nav-item heading7">
                                <Link className="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('stories')} to="stories">Stories</Link>
                            </li>
                            <li className="nav-item heading7">
                                <Link className="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('contact')}>Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <section className='bg-light back-logo'>
                <div className='text-center pt-3 mt-4' >
                    <h5 className='mt-5' style={{ color: "#ecd5c5", }}>OUR  STORIES</h5>
                    <h3 className='heading10  '>Let's See</h3>
                </div>
                <div className='container-fluid'>
                    <div className='row py-2 my-2 mt-5 align-items-center g-4'>
                        <div className="col-md-6">

                            <video src={video1} autoPlay loop className='w-100 img3'></video>
                        </div>
                        <div className="col-md-6 text-center">
                            <h1 className='heading0 ' style={{ color: "#ecd5c5", fontSize: "50px" }}>Wedding</h1>
                            <p className='heading3 '>Love seems the swiftest but it is the slowest of all growths. No man or woman really knows what perfect love is until they have been married a quarter of a century.</p>
                        </div>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <div className="row text-center">
                                <div>
                                    <h1 className='heading0' style={{ color: "#ecd5c5", fontSize: "50px" }}>LIFESTYLE</h1>
                                    <p className='heading3'>Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.</p>
                                </div>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='text-center'>
                                <img src={cmp1} alt="" className='img-fluid  img3' />
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className='text-center'>
                                <video src={video2} autoPlay loop className='w-100 img3'></video>
                            </div>


                        </div>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <div className='text-center' >
                                <h1 className='heading0' style={{ color: "#ecd5c5", fontSize: "50px" }}>BABY COMMING SOON!</h1>
                                <p className='heading3 '>
                                    Welcome to the world, little one.  A baby is a blessing. A gift from heaven above, a precious little angel to cherish and to love</p>
                            </div>


                        </div>
                        <div className='col-md-6 d-flex justify-content-center align-items-center'>
                            <div className='text-center'>
                                <h1 className='heading0' style={{ color: "#ecd5c5 ", fontSize: "50px" }}> TEMPLE </h1>
                                <p className='heading3'>
                                    A temple is a place where we feel close to our Father in Heaven and sense the divine purpose of life.
                                    There is a sacredness in silence, and temples are the perfect place to experience it.” “In the temple, seek solace from the chaos of the world and find inner peace.
                                </p>
                            </div>

                        </div>
                        <div className='col-md-6'>

                            <div className='text-center'>
                                <img src={temple} alt="" className='img-fluid  img3' />
                            </div>

                        </div>
                    </div>

                </div>

                <div className='container  bg-3 mt-5'>
                    <p className='heading5 mt-5 text-31 text-center' style={{ color: " #ecd5c5", fontSize: "40px" }}>EVERLASTING MOMENTS</p>
                    <div className="row">
                        <div className="col-md-7 ">
                            {/* <h5 className='heading5 mt-4 text-2' style={{ color: " #ecd5c5" }}>FUN OVERLOADED</h5> */}

                            <p className='heading2 mt-5'>A TEAM OF EXTREMELY TALENTED AND PASSIONATE PHOTOGRAPHERS, VIDEOGRAPHERS, AND DESIGNERS, BRING TOGETHER THE BEST OF BOTH CONTEMPORARY CANDID STORY TELLING AND TRADITIONAL SENSE OF ART, AT
                                YOUR SERVICE.</p>
                            <p className='heading2'>WE TAKE SO MUCH JOY AND PLEASURE IN WHAT WE DO AND WE ABSOLUTELY LOVE EACH AND EVERY STEP IN IT. WE CONSIDER THAT AS ONE OF OUR GREATEST ASSET. ALONG WITH CAPTURING EVERLASTING MOMENTS FOR WEDDINGS,
                                WE ALSO EXTEND OUR SERVICES TO WEDDING AND ALLIED EVENTS, BABY SHOWER, NEW BORN SHOOTS, ARANGETRAMS, BIRTHDAYS AND CRADLE CEREMONIES</p>

                        </div>
                        <div className="col-md-5  mt-6 ">
                            <img src={collection1} alt="" className='img-fluid' />

                        </div>
                    </div>

                </div>

            </section>

        </div>
    )
}
