import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import Navbar from './Components/Navbar'
import Stories from './Components/Stories'
import Galler from './Components/Galler'



function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/stories' element={<Stories />} />
            <Route path='/galler' element={<Galler />} />
           
            
           
          </Route>
        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App
