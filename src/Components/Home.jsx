import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import img2 from "../assets/images/img2.jpeg"
// // import wedding from '../assets/images/marriage-img-2.jpg'
// import photo from '../assets/images/photo.jfif'
// import engagement from '../assets/images/engagement.jpeg'
// import baby1 from '../assets/images/babyshower.webp'

// import fb from '../assets/images/fb.png'
// import insta from '../assets/images/insta.png'
// import twitter from '../assets/images/twitter.png'
// import whatsapp from '../assets/images/whatsapp.png'
// import youtube from '../assets/images/youtube.png'
// import gallerys1 from '../assets/images/gallery-16.jpg'
// import gallery13 from '../assets/images/gallery-13.jpg'
// import demo from '../assets/images/demo1.jpeg'
// import gallery17 from '../assets/images/gallery-17.jpg'
import 'aos/dist/aos.css';



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

      {/* <div className='buy-now'>
        <div className='buy-one-bt'>
          <Link to='#' className='heading12 buy-now-bt'>Buy now</Link></div>
        <div className='buy-two-bt'>
          <Link to='#' className='heading12 buy-now-bt '>Contact Now</Link></div>
      </div> */}
     
      
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
                    <Link className="nav-link active px-3 text1" aria-current="page" id='name-nav'>Home</Link>
                  </li>
                  <li className="nav-item heading7">
                    <Link className="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('about')}>About</Link>
                  </li>
                  <li className="nav-item heading7">
                    <Link className="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('moments')} to="galler">Moments</Link>
                  </li>
                  <li>
                    <h1 className=' heading5 text-light'>logo</h1>
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
        <Link to="" className='heading12 buy-now-bt'>BuyNow</Link>
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
       
        {/* marriage starts */}
        <section className='container-fluid mt-4 py-4'>
          <div className='row marriage-bg'>
            <div className='col-md-5 d-flex justify-content-center align-items-center'>
              <div className=' data-aos="fade-up"'>
                <h1 className='marriage-text '>
                  <span className='text-1 ' > ✨Smile</span> <br />
                  <span className='text-2'> Say</span> <br />
                  <span className='text-3'> It </span> <br />
                  <span className='text-4'> all</span>
                </h1>
              </div>
            </div>
            <div className='col-md-5'></div>
          </div>
        </section>
        {/* package starts */}
        <section>
          <div className="container mt-4" id='packages'>
            <div className="row g-0">
              <div className="col-md-5 mt-5">
                {/* <img src={gallery17} alt="" className='img-fluid' /> */}
              </div>
              <div className="col-md-7 mt-5 px-5 py-5 text-center bg-2  " >

                <div class="text-31">
                  <h5 className='mt-3 '>Every Special Moments</h5>
                  <h3 className='heading5 mt-4'>Full Wedding Experience</h3>
                  <ul className='heading9 mt-3 py-3 ' style={{ listStyleType: "disc", textAlign: "left", color: "grey" }}>
                    <li className='heading4 mt-0 '>Wedding</li>
                    <li className='heading4 mt-0'>Baby shower</li>
                    <li className='heading4 mt-0' >Engagement </li>
                    <li className='heading4 mt-1'>Baby Shoot</li>
                    <li className='heading4 mt-0'>Religious Celebration </li>
                    <li className='heading4 mt-0'>Birthday Celebration</li>
                  </ul>

                </div>
                <div className='text-center'>
                  <button className='' >
                    <a className=' px-4 py-2 btn1' href='https://axesstechnology.org/contact' target="_blank" style={{ textDecoration: "none", color: "black" }}>Contact here
                      <i class="bi bi-arrow-right "></i></a>
                  </button>
                </div>


              </div>


            </div>
          </div>
        </section>
        {/* footer starts */}
       


      </section>
    </div>
  )
}
