import { Link } from "react-router-dom"
import '../../style/index.css'
import { useRef, useState } from "react"
import MyContext from "../../context/CreateContext"
import { useContext , useEffect} from "react"
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
 useEffect(() => {
  if (darkMode) {
    document.body.style.backgroundColor = "#111827"; 
  } else {
    document.body.style.backgroundColor = "#F0F2F5";
  }
}, [darkMode]);
let inputs = `  mt-4 p-3 rounded-lg border outline-none transition-all duration-300 ${darkMode 
    ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" 
    : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
  }`
  const menuRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
  const closeMenu = (e:any) => {
    if (toggle && menuRef.current && !menuRef.current.contains(e.target)) {
      setTogglebtn(false);
    }
  };

  document.addEventListener('mousedown', closeMenu);
  return () => document.removeEventListener('mousedown', closeMenu);
}, [toggle]);
  return (
    <>
<div className={`flex justify-between items-center px-3 h-25 py-4 gap-4 bg-cyan-700 shadow-lg ${darkMode && 'bg-gray-950 '} `}>
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
    className={ `responsiveInput w-full ${inputs}` }
    placeholder="Search..." 
  />
  <span className={`responsiveInput absolute ${darkMode && 'text-white'} right-4 top-6 text-gray-800 text-3xl pointer-events-none`}>
    ⌕
  </span>
</div>
  {/* for Rsponsive Input */}
   {searchInput && <input 
  type="text" 
  className={` absolute top-20 z-10 right-6 w-75 ${inputs}`} 
  placeholder="Search..." /> } 
  {/* Link parent Toggle btn */}
 <div className=" flex gap-3">
   <span className={`classIcon hidden text-4xl ${darkMode && 'text-white'}`}onClick={handleSearchInput}>⌕</span>
    <button onClick={handleToggle} className=" togglebtn lg:hidden xl:hidden 2xl:hidden  font-bold text-2xl text-white ">☰</button>
    </div>

{/* Link container */}
  <div ref={menuRef} className={` hidden  2xl:flex lg:flex lg:gap-6  xl:flex xl:gap-7  ${toggle ? `responsiveLink  ${darkMode ?'bg-gray-800 text-white':'bg-white'}`:'' }`}>
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
      to="/learning"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `} >Learning </Link>
       <Link
      to="/blog"
      className={` ${darkMode?"text-white":'text-black'} `} >blogs</Link>
      <button onClick={handleDarkMode} className={`${darkMode && 'text-white'} ${linkstyle} text-2xl hover:cursor-pointer`}>{darkMode?'☼':'☾'}</button>
       <Link
      to="/about"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `} >Login </Link>
       <Link
      to="/about"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `}>Signup </Link>
       <Link
      to="/admin/page"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `}>Dashboard</Link>
  </div>

</div>

    </>
  )
}

export default Navbar
