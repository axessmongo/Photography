import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import Navbar from './Components/Navbar'
// import Stories from './Components/Stories'
// import Galler from './Components/Galler'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {

  useEffect(()=>{
    AOS.init();
  },[])
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/stories' element={<Stories />} />
            {/* <Route path='/galler' element={<Galler />} /> */}
           
            
           
          </Route>
        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App
