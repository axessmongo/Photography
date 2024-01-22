import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Stories from './Components/Stories'
import Latest from './Components/Latest'



function App() {
 

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<Home />} />
            <Route path='/stories' element={<Stories />} />
            <Route path='/latest' element = {<Latest/>}/>
           
           
            
           
          </Route>
        </Routes>
      </BrowserRouter>
 
    </>
  )
}

export default App
