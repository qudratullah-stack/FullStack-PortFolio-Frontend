import { Link } from "react-router-dom"
import '../../../style/index.css'
import MyContext from "../../../context/CreateContext"
import NavbarDropdown from "./NavbarDropdown"
import { useContext , useEffect, useState, useRef} from "react"
import SearchInput from "./SearchInput"
function Navbar() {
  const [toggle , setTogglebtn ] =useState(false)
  const {darkMode, setDarkMode} = useContext(MyContext)
  const handleToggle =()=>{
    setTogglebtn(prev => !prev)
  }

 const handleDarkMode = ()=>{
      setDarkMode(prev => {
     const value =    !prev
     localStorage.setItem('darkMode',JSON.stringify(value))
     return value
      })
 }
 useEffect(()=>{
  const saved = localStorage.getItem('darkMode')
  if(saved !== null){
    setDarkMode(JSON.parse(saved))
  }
 })
 const linkstyle = '    hover:text-gray-400  font-medium transition-colors  relative group hover:underline'
 useEffect(() => {
  if (darkMode) {
    document.body.style.backgroundColor = "#111827"; 
  } else {
    document.body.style.backgroundColor = "#F0F2F5";
  }
}, [darkMode]);
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
<div className={`flex justify-between items-center px-3 h-25 py-4 gap-3 bg-cyan-700 shadow-lg ${darkMode && 'bg-gray-950 '} `}>
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
 <div className=" flex gap-3">
    <button onClick={handleToggle} className=" togglebtn lg:hidden xl:hidden 2xl:hidden  font-bold text-2xl text-white ">☰</button>
    </div>
  <div ref={menuRef} className={` hidden  2xl:flex lg:flex lg:gap-6 h-full items-center xl:flex xl:gap-7  ${toggle ? `responsiveLink  ${darkMode ?'bg-gray-800 text-white':'bg-white'}`:'' }`}>
    <SearchInput/>
    <Link
      to="/"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `}>Home </Link>
     <Link
      to="/contactUs"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `}>Contact Us</Link>
    <Link
      to="/about"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `} >About </Link>
        <NavbarDropdown />
      <button onClick={handleDarkMode} className={`${darkMode && 'text-white'} ${linkstyle} text-2xl hover:cursor-pointer`}>{darkMode?'☼':'☾'}</button>
       <Link
      to="/login"
      className={`${linkstyle} ${darkMode?"text-white":'text-black'} `} >Login </Link>
       <Link
      to="/signup"
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
