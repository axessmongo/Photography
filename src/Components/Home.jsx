import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img2 from '../Assets/images/img2.jpeg'
import Moments from './Moments';
import Marriage from './Marriage';
import 'aos/dist/aos.css';
import Package from './Package';
import Footer from './Footer';




export default function Home() {
  const [active, setActive] = useState(false)
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
    <div className='overflow-hidden '>
      <section>
        {/* navbar starts */}
        <div id='home'>
          <nav className="navbar navbar-expand-lg nav-banner  p-0 z-3" style={{ backgroundColor: '#060525' }}>
            <div className="container-fluid">
              <button className="navbar-toggler shadow-none" onClick={() => setActive(!active)}
                type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                <i className={`bi ${active ? "bi-x" : "bi-list"}`}></i>
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
                    <Link className="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('moments')} to="galler">Moments</Link>
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
        </div>

        <div className='buy-now rounded-2'>
          <Link to="https://axesstechnology.in/contact" target='_blank' className='heading12 buy-now-bt'>BuyNow</Link>
        </div>
        {/* navbanner starts */}
        <section className='hero-banner vh-100'>

        </section>
        {/* about starts */}
        <section>
          <div className="container-fluid">
            <div className="row align-items-center justify-content-center ">
              <div className="col-xxl-4 col-lg-5 col-md-6 text-center disp">
                <img src={img2} alt="" className='img-fluid givenheight' />

              </div>
              <div className="col-xxl-4 col-lg-5 col-md-6 about">
                <div className='my-0 py-5 px-5 heading10' >
                  About us
                  <p className='mt-4 heading8'>Life can be crazy, shy, silly, glowing, sensual, teasing, flirting, quiet or playful and we are passionate about documenting spontaneous mood in an editorially style, while carefully creating authentic images that matter. We want to take pictures of you the way you are.

                  </p>
                  <div class="text31 mt-5"><h6> TimeZone</h6>
                    <p className='heading1'>FOUNDER &amp; ARTIST</p></div>


                </div>


              </div>
            </div>
          </div>
        </section>
        {/* moments starts */}
        <Moments />


        {/* marriage starts */}
        <Marriage />

        {/* package starts */}
        <Package />

        {/* footer starts */}
        <Footer/>



      </section>
    </div>
  )
}
