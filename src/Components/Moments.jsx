import React from 'react'
import wedding from '../Assets/images/wedding.jpeg'
import engagement from '../Assets/images/engagement.jpeg'
// import lifestyle from '../Assets/images/lifestyle.jpeg'
import { Link } from 'react-router-dom'


function Moments() {
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
    
   <>
    <section className='container'>
         <div className='text-center pt-3'>
            <h3>Moments</h3>
            <h1>What We Do</h1>
           </div>
        <div className='row d-flex justify-content-evenly py-3'>
            <div className='col-md-4 pt-4'>
                <div>
                    <div className='p-2 border border-secondary'>
                        <img src={wedding} alt="" className='img-fluid' />
                    </div>
                    <div className='pt-4 text-center'>
                        <h3>Wedding</h3>
                    </div>
                </div>
            </div>
            <div className='col-md-4 pt-4'>
                <div>
                    <div className='p-2 border border-secondary'>
                        <img src={engagement} alt="" className='img-fluid' />
                    </div>
                    <div className='pt-4 text-center'>
                        <h3>Engagement</h3>
                    </div>
                </div>
            </div>
            <div className='col-md-4 pt-4'>
                <div>
                    <div className='p-2 border border-secondary'>
                        {/* <img src={lifestyle} alt="" className='img-fluid' /> */}
                    </div>
                    <div className='pt-4 text-center'>
                        <h3>Life Style</h3>
                    </div>
                </div>
            </div>
            <div className='col-md-4 pt-4'>
                <div>
                    <div className='p-2 border border-secondary'>
                        <img src={wedding} alt="" className='img-fluid' />
                    </div>
                    <div className='pt-4 text-center'>
                        <h3>Wedding</h3>
                    </div>
                </div>
            </div>
            <div className='col-md-4 pt-4'>
                <div>
                    <div className='p-2 border border-secondary'>
                        <img src={engagement} alt="" className='img-fluid' />
                    </div>
                    <div className='pt-4 text-center'>
                        <h3>Engagement</h3>
                    </div>
                </div>
            </div>
            <div className='col-md-4 pt-4'>
                <div>
                    <div className='p-2 border border-secondary'>
                        {/* <img src={lifestyle} alt="" className='img-fluid' /> */}
                    </div>
                    <div className='pt-4 text-center'>
                        <h3>Life Style</h3>
                    </div>
                </div>
            </div>
        </div>
    </section></>
  )
}

export default Moments