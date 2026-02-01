import Navbar from "./partials/Navbar"
import { homeArray } from "../type/ArrayType"
import { useState, useEffect ,useContext} from "react"
import MyContext from "../context/CreateContext"

function Home() {
  const{darkMode} = useContext(MyContext)
  const [arrayLength ,  setArrayLength] = useState(0)
  useEffect(()=>{
    const intervel = setInterval(() => {
      setArrayLength(prev => (prev+1)%homeArray.length)
    }, 4500);
    return ()=> clearInterval(intervel)
  },[])
  return (
   <>
   <Navbar/>
  <div className="bg-[url(../assets/homepagebg.jpeg)] h-auto bg-cover relative bg-center">
      <div className={`${darkMode?'bg-gray-800/90':'bg-gray-700/80'} h-auto pb-4`}>
      <div className="h1-array-parent w-full p-5 h-auto py-20 flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl my-7 text-cyan-400 px-4 md:text-4xl lg:text-5xl xl:text-6xl items-center flex text-center">Welcome to QudratMasoom</h1>
   
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
      </div>
</div>
  </div>
   </>
  )
}

export default Home
