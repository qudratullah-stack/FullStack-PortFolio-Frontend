import MyContext from "../context/CreateContext";
import { useContext } from "react";
import Navbar from "./partials/Navbar"
function Admin() {
    const {darkMode} = useContext(MyContext)
    const inputStyle = `w-full mt-4 p-3 rounded-lg border outline-none transition-all duration-300 
  ${darkMode 
    ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500" 
    : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
  }`;
  return (

   <>
   <Navbar/>
  <div className={`project flex flex-col w-full items-center min-h-screen p-7 transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
   
   <div className={`form flex flex-col w-full max-w-2xl p-8 rounded-2xl shadow-xl ${darkMode ? 'bg-gray-800/50 border border-gray-700' : 'bg-white'}`}>
      
      <h2 className="font-extrabold text-3xl mb-6 text-center tracking-tight">
         Add <span className="text-cyan-500">New Project</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <input type="text" placeholder="Project Name" className={inputStyle} />
         <input type="text" placeholder="Category" className={inputStyle} />
         <input type="text" placeholder="Github Link" className={inputStyle} />
         <input type="text" placeholder="Vercel Link" className={inputStyle} />
         <input type="text" placeholder="Railway Link" className={inputStyle} />
         <input type="text" placeholder="Information" className={inputStyle} />
      </div>

      <div className="mt-8 p-4 rounded-xl border border-dashed border-gray-500">
         <p className="text-sm font-semibold mb-2 text-cyan-500 uppercase tracking-widest">Problem & Solution</p>
         <input type="text" placeholder="Problem Title" className={inputStyle} />
         <textarea placeholder="Problem Solution" className={`${inputStyle} h-32 resize-none`}></textarea>
      </div>

      <button className="mt-8 w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-transform active:scale-95 shadow-lg shadow-cyan-500/20">
         Upload Project to Cloud
      </button>
   </div>
</div>
   </>
  )
}

export default Admin
