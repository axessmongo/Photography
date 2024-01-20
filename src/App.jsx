import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import Navbar from './Components/Navbar'
import Package from './Components/Package'


function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route>
            {/* <Route path='/' element={<Home />} /> */}
             <Route path='/' element={<Package />} />
             <Route path='/home' element = {<Home />}/>
            
           
          </Route>
        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App
