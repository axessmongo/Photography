import React from 'react'
import img2 from '../assets/images/img2.jpeg'

export default function Package() {
    return (
        <div>
            <div className="container">
                <div className="row g-0">
                    <div className="col-md-5 mt-5">
                        <img src={img2} alt="" className='img-fluid' />
                    </div>
                    <div className="col-md-7 mt-5 px-5 py-5 text-center bg-2  " >

                        <div class="text-2">
                            <h5 className='mt-5'>Every Special Moment</h5>
                            <h3 className='heading5 mt-3'>The Full Wedding Experience</h3>
                            <ul className='heading9 mt-4 py-3' style={{listStyleType:"none", textAlign:"left"}}>
                              <li>Wedding</li>
                              <li>Baby shower</li>
                              <li> Wedding </li>
                              <li> Wedding</li>
                              <li> Wedding </li>
                              <li> Wedding</li>
                            </ul>
                          
                            </div>
                            <div className='text-center'>
                           <button className='btn1'>Pricing Packages <i class="bi bi-arrow-right "></i></button>
                           </div>  
                            

                    </div>
                  

                </div>
            </div>
        </div>
    )
}
