import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import Navbar from './Components/Navbar'
import Package from './Components/Package'
import Marriage from './Components/Marriage'
import Latest from './Components/Latest'
import Collection from './Components/Collection'


function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            {/* <Route path='/' element={<Collection />} /> */}
            {/* <Route path='/Latest' element={<Latest />} /> */}
             {/* <Route path='/' element={<Moments />} />
             <Route path='/home' element = {<Home />}/> */}
            
           
          </Route>
        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App
