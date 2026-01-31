import './style/App.css'
import Home from './componenets/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './componenets/About'
import ContactUs from './componenets/ContactUs'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
    
   
   </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
