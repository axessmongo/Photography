import React from 'react'
import wedding from '../Assets/image/wedding.jpeg'
import engagement from '../Assets/image/engagement.jpeg'
import lifestyle from '../Assets/image/lifestyle.jpeg'


function Moments() {
  return (
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
                        <img src={lifestyle} alt="" className='img-fluid' />
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
                        <img src={lifestyle} alt="" className='img-fluid' />
                    </div>
                    <div className='pt-4 text-center'>
                        <h3>Life Style</h3>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Moments