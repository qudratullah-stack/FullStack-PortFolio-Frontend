import { Link } from "react-router-dom"
import '../../style/index.css'
import { useState } from "react"
import MyContext from "../../context/CreateContext"
import { useContext } from "react"
function Navbar() {
  const [toggle , setTogglebtn ] =useState(false)
  const [searchInput, setSearchInput] = useState(false)
  const {darkMode, setDarkMode} = useContext(MyContext)
  const handleToggle =()=>{
    setTogglebtn(prev => !prev)
  }
  const handleSearchInput = ()=>{
    setSearchInput(prev => !prev)
  }
 const handleDarkMode = ()=>{
      setDarkMode(prev => !prev)
 }
 const linkstyle = '    hover:text-gray-400  font-medium transition-colors  relative group hover:underline'
  return (
    <>
<div className={`flex justify-between items-center px-3 h-25 py-4 gap-4 bg-cyan-700 shadow-lg ${darkMode && 'bg-gray-900 '} `}>
 <span className="flex gap-0.8 font-bold text-xl">
  {"</> MasoomCodes".split("").map((char, index) => (
    <span
      key={index}
      className="animate-letter"
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      {char}
    </span>
  ))}
</span>
   {/* Search Input */}
  <div className="relative w-1/3 flex items-center">
  <input 
    type="text" 
    className="responsiveInput w-full h-8.75 px-5 pr-10 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm placeholder-gray-400 text-gray-800 outline-none" 
    placeholder="Search..." 
  />
  <span className={`responsiveInput absolute ${darkMode && 'text-white'} right-4 text-gray-800 text-2xl pointer-events-none`}>
    ⌕
  </span>
</div>
  {/* for Rsponsive Input */}
   {searchInput && <input 
  type="text" 
  className=" absolute top-20 z-10 right-6 w-1/3 h-8.75 px-5 rounded-full border-2 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 shadow-sm placeholder-gray-400 text-gray-800 outline-none" 
  placeholder="Search..." /> } 
  {/* Link parent Toggle btn */}
 <div className=" flex gap-3">
   <span className={`classIcon hidden text-2xl ${darkMode && 'text-white'}`}onClick={handleSearchInput}>⌕</span>
    <button onClick={handleToggle} className=" togglebtn lg:hidden xl:hidden 2xl:hidden  font-bold text-2xl text-white ">☰</button>
    </div>

{/* Link container */}
  <div className={` hidden  2xl:flex lg:flex lg:gap-6  xl:flex xl:gap-7 ${darkMode&&'bg-gray-900'} ${toggle ? `responsiveLink ${darkMode ?'bg-gray-900 text-white':'bg-white'}`:'' }`}>
    <Link
      to="/"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `}>Home </Link>
     <Link
      to="/contactUs"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `}>Contact Us</Link>
    <Link
      to="/about"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `} >About </Link>
       <Link
      to="/about"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `} >Tortoils </Link>
       <Link
      to="/about"
      className={` ${darkMode?"text-white":'text-black'} `} >blog</Link>
      <button onClick={handleDarkMode} className={`${darkMode && 'text-white'} ${linkstyle} text-2xl hover:cursor-pointer`}>{darkMode?'☼':'☾'}</button>
       <Link
      to="/about"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `} >Login </Link>
       <Link
      to="/about"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `}>Signup </Link>
  </div>

</div>

    </>
  )
}

export default Navbar
