import { Link } from "react-router-dom"
import '../../style/index.css'
import { useState } from "react"

function Navbar() {
  const [toggle , setTogglebtn ] =useState(false)
  const handleToggle =()=>{
    setTogglebtn(prev => !prev)
  }
  return (
    <>
<div className="flex justify-between items-center px-3 h-25 py-4 gap-4 bg-cyan-700 shadow-lg ">
 <span className="flex gap-0.8 font-bold text-xl">
  {"MasoomCodes".split("").map((char, index) => (
    <span
      key={index}
      className="animate-letter"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {char}
    </span>
  ))}
</span>
   
     <input 
  type="text" 
  className="responsiveInput w-1/3 h-8.75 px-5 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm placeholder-gray-400 text-gray-800 outline-none" 
  placeholder="Search..." 
    
/>  
 <div className=" flex gap-3">
   <span className="classIcon hidden text-2xl">⌕</span>
    <button onClick={handleToggle} className=" togglebtn lg:hidden xl:hidden 2xl:hidden  font-bold text-2xl text-white ">☰</button>
    </div>


  <div className={` hidden  2xl:flex lg:flex lg:gap-6  xl:flex xl:gap-7 ${toggle && 'responsiveLink' }`}>
    <Link
      to="/"
      className="text-white hover:underline hover:text-gray-400 font-medium transition-colors duration-300 relative group">Home </Link>
     <Link
      to="/contactUs"
      className="text-white hover:underline hover:text-gray-400 font-medium transition-colors duration-300 md:text-sm relative group">Contact Us</Link>
    <Link
      to="/about"
      className="text-white hover:text-gray-400 font-medium transition-colors duration-500 relative group hover:underline " >About </Link>
       <Link
      to="/about"
      className="text-white hover:text-gray-400 font-medium transition-colors duration-500 relative group hover:underline " >Tortoils </Link>
       <Link
      to="/about"
      className="text-white hover:text-gray-400 font-medium transition-colors duration-500 relative group hover:underline " >blog</Link>
       <Link
      to="/about"
      className="text-white hover:text-gray-400 font-medium transition-colors duration-500 relative group hover:underline " >Login </Link>
       <Link
      to="/about"
      className="text-white hover:text-gray-400 font-medium transition-colors duration-500 relative group hover:underline " >Signup </Link>
  </div>

</div>

    </>
  )
}

export default Navbar
