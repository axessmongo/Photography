import React from 'react'
import { Link } from 'react-router-dom'
import logo1 from '../assets/image/logo1.png'
import img2 from '../assets/image/img2.jpeg'
import wedding from '../Assets/image/wedding.jpeg'
import engagement from '../Assets/image/engagement.jpeg'
import lifestyle from '../Assets/image/lifestyle.jpeg'
import marriage1 from '../Assets/image/marriage-img-1.jpg'
import marriage2 from '../Assets/image/marriage-img-2.jpg'
import marriage3 from '../Assets/image/marriage-img-3.jpeg'
import Collection2 from '../assets/image/collection2.jpeg'
import footer2 from '../assets/image/footer2.jpeg'
import baby1 from '../assets/image/babyshower.webp'
import resort from '../assets/image/resort.jpg'
import temple from '../assets/image/temple.png'

export default function Home() {
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
    <div>
      <section>
        {/* navbar starts */}
        <section className='nav-banner'>
          <nav class="navbar navbar-expand-lg nav-banner p-0" id='home'>
            <div class="container-fluid">

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent ">
                <ul class="navbar-nav mx-auto  mb-lg-0 text-center  ">

                  <li class="nav-item heading7 ">
                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('home')}>Home</a>
                  </li>

                  <li class="nav-item heading7 ">
                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav'onClick={() => gotoTop('about')} >About </a>
                  </li>



                  <li class="nav-item heading7">
                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav'onClick={() => gotoTop('moments')}>Moments</a>
                  </li>
                  <Link class="navbar-brand" to="#">
                    <img src={logo1} alt=" navlogo" className='nav-logo img-fluid ' />
                  </Link>

                  <li class="nav-item heading7">
                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav' onClick={() => gotoTop('packages')}>Packages</a>
                  </li>

                  <li class="nav-item heading7 ">
                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav'onClick={() => gotoTop('stories')} >Stories</a>
                  </li>

                  <li class="nav-item heading7    ">
                    <a class="nav-link active px-3 text1" aria-current="page" id='name-nav'onClick={() => gotoTop('contact')}>Contact</a>
                  </li>



                </ul>
              </div>
            </div>
          </nav>
          {/* Nav-End */}



        </section>
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
                  <div class="text2 mt-5"><h6> TimeZone</h6>
                    <p className='heading1'>FOUNDER &amp; ARTIST</p></div>


                </div>


              </div>
            </div>
          </div>
        </section>
        {/* moments starts */}
        <section className='container'>
          <div className='text-center pt-3 text-2'>
            <h5 className='mt-4'>Moments</h5>
            <h3 className='heading10 mt-3'>What We Do</h3>
          </div>
          <div className='row d-flex justify-content-evenly py-3'>
            <div className='col-md-4 pt-4'>
              <div>
                <div className='p-2 border border-secondary'>
                  <img src={wedding} alt="" className='img-fluid' />
                </div>
                <div className='pt-4 text-center heading11'>
                  <h3>Wedding</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 pt-4'>
              <div>
                <div className='p-2 border border-secondary'>
                  <img src={engagement} alt="" className='img-fluid' />
                </div>
                <div className='pt-4 text-center heading11'>
                  <h3>Engagement</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 pt-4'>
              <div>
                <div className='p-2 border border-secondary'>
                  <img src={lifestyle} alt="" className='img-fluid' />
                </div>
                <div className='pt-4 text-center heading11'>
                  <h3>Life Style</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 pt-4 mt-4 '>
              <div>
                <div className='p-2 border border-secondary'>
                  <img src={baby1} alt="" className='img-fluid' />
                </div>
                <div className='pt-4 text-center heading11'>
                  <h3>Baby</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 pt-4 mt-4'>
              <div>
                <div className='p-2 border border-secondary'>
                  <img src={temple} alt="" className='img-fluid' />
                </div>
                <div className='pt-4 text-center heading11'>
                  <h3>Temple</h3>
                </div>
              </div>
            </div>
            <div className='col-md-4 pt-4  mt-4'>
              <div>
                <div className='p-2 border border-secondary'>
                  <img src={resort} alt="" className='img-fluid' />
                </div>
                <div className='pt-4 text-center heading11'>
                  <h3> Resort</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* marriage starts */}
        <section className='container-fluid mt-4 py-4'>
          <div className='row marriage-bg'>
            <div className='col-md-5 d-flex justify-content-center align-items-center'>
              <div>
                <h1 className='marriage-text'>
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
          <div className="container mt-4">
            <div className="row g-0">
              <div className="col-md-5 mt-5">
                <img src={img2} alt="" className='img-fluid' />
              </div>
              <div className="col-md-7 mt-5 px-5 py-5 text-center bg-2  " >

                <div class="text-2">
                  <h5 className='mt-3 '>Every Special Moment</h5>
                  <h3 className='heading5 mt-4'>Full Wedding Experience</h3>
                  <ul className='heading9 mt-3 py-3' style={{ listStyleType: "disc", textAlign: "left", color: "grey" }}>
                    <li className='heading4 mt-0'>Wedding</li>
                    <li className='heading4 mt-0'>Baby shower</li>
                    <li className='heading4 mt-0' >Engagement </li>
                    <li className='heading4 mt-1'>Baby Shoot</li>
                    <li className='heading4 mt-0'>Religious Celebration </li>
                    <li className='heading4 mt-0'>Birthday Celebration</li>
                  </ul>

                </div>
                <div className='text-center'>
                  <button className='btn1' href='./Latest.jsx'>Pricing Packages <i class="bi bi-arrow-right "></i></button>
                </div>


              </div>


            </div>
          </div>
        </section>
        {/* collection starts */}
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
              <img src={footer2} alt="" className='' />
            </div>



          </section>
        </section>
      </section>
    </div>
  )
}
