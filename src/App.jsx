import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Components/Home'


function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
             <Route path='/nav' element={<Navbar />} />
            
           
          </Route>
        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App
