import './style/App.css'
import Home from './componenets/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './componenets/About'
import ContactUs from './componenets/ContactUs'
import ProviderContext from './context/ProviderContext'
function App() {
  return (
    <>
    <BrowserRouter>
      <ProviderContext>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
    
   </Routes>
   </ProviderContext>
      </BrowserRouter>
    </>
  )
}
export default App
