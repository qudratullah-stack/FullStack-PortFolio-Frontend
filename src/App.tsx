import './style/App.css'
import Home from './componenets/Home'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './componenets/About'
import ContactUs from './componenets/ContactUs'
import ProviderContext from './context/ProviderContext'
import Admin from './componenets/partials/Admin/Admin'
import AllProjectData from './componenets/AllProjectData'
import Navbar from './componenets/partials/Navbar'
import Blogs from './componenets/Blogs/Blogs'
import Educational from './componenets/Blogs/Educational'
import DetailBlogs from './componenets/Blogs/DetailBlogs'
import DetailEducational from './componenets/Blogs/DetailEducational'
import GrowthTimeline from './componenets/partials/GrowthTimeline'
function App() {
  return (
    <>
    <BrowserRouter>
      <ProviderContext>
        <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/admin/page' element={<Admin/>}/>
      <Route path='/contactUs' element={<ContactUs/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/learning' element={<Educational/>}/>
      <Route path='/detailblogs/:id' element={<DetailBlogs/>}/>
      <Route path='/growthtimeline' element={<GrowthTimeline/>}/>
      <Route path='/learningblogdetail/:id' element={<DetailEducational/>}/>
      <Route path='/allProjectdata/:id' element={<AllProjectData/>}/>
    
   </Routes>
   </ProviderContext>
      </BrowserRouter>
    </>
  )
}
export default App
