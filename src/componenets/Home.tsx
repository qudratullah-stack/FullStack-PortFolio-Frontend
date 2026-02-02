import Navbar from "./partials/Navbar"
import { homeArray } from "../type/ArrayType"
import { useState, useEffect ,useContext} from "react"
import MyContext from "../context/CreateContext"
function Home() {
  const{darkMode, projectData} = useContext(MyContext)
  const [arrayLength ,  setArrayLength] = useState(0)
  const [showTable , setShowTable] = useState(false)
  useEffect(()=>{
    const intervel = setInterval(() => {
      setArrayLength(prev => (prev+1)%homeArray.length)
    }, 4500);
    return ()=> clearInterval(intervel)
  },[])

const tableRowStyle = `flex justify-between items-center p-4 border-b transition-all duration-300 ${
  darkMode ? "border-gray-700 hover:bg-gray-700/50 text-gray-300" : "border-gray-100 hover:bg-gray-50 text-gray-600"
}`;


const tableContainerStyle = `fixed top-0 right-0 h-full w-[350px] md:w-[450px] shadow-2xl z-50 transition-transform duration-500 ease-in-out ${
  showTable ? "translate-x-0" : "translate-x-full"
} ${darkMode ? "bg-gray-800 border-l border-gray-700" : "bg-white border-l border-gray-200"}`;
 


  return (
   <>
   <Navbar/>

  <div className="bg-[url(../assets/homepagebg.jpeg)] h-auto bg-cover relative bg-center">
      <div className={`${darkMode?'bg-gray-800/90':'bg-gray-700/80'} h-auto pb-4`}>
      <div className="h1-array-parent w-full p-5 h-auto py-20 flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl my-7 text-cyan-400 px-4 md:text-4xl lg:text-5xl xl:text-6xl items-center flex text-center">Welcome to  QudratMasoom</h1>
   
  <div className="arraycontainer text-3xl font-semibold flex flex-wrap text-white h-12">
  <span
    key={arrayLength}
    className="typewriter text-2xl md:text-3xl lg:text-4xl xl:text-5xl h-auto pb-2 "
    style={{
      //@ts-ignore
      "--chars": homeArray[arrayLength].text.length}}> {homeArray[arrayLength].text} </span>
</div>
   <p className="mt-8 text-lg p-7 md:text-xl lg:text-3xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal antialiased">
  A <span className="text-cyan-400 font-medium">Full-Stack MERN Specialist</span> dedicated to building high-performance web applications. I bridge the gap between complex backend logic and intuitive user experiences to create <span className="text-white font-bold  border-b-2 border-cyan-500/30">scalable solutions</span> that drive real-world results.
</p>
    <button className="my-auto w-50 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg " onClick={()=>{
        setShowTable(true)
    }}>📋 View Projects</button>
    <div className={tableContainerStyle}>
  <div className="flex flex-col h-full">
    
    
    <div className="p-6 border-b border-gray-500/20 flex justify-between items-center">
      <h3 className="font-bold text-xl">All Projects</h3>
      <button onClick={() => setShowTable(false)} className="text-red-500 hover:scale-110">✕</button>
    </div>
    <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
      {projectData.map((item, index) => (
        <div key={index} className={tableRowStyle}>
          <span className="font-medium">{item.projectName}</span>
          <button className="text-xs bg-cyan-600/20 text-cyan-500 px-3 py-1 rounded-full hover:bg-cyan-600 hover:text-white transition-all">
            View Details
          </button>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
  </div>
</div>
   </>
  )
}

export default Home
