 
 import { useNavigate } from "react-router-dom";
 import MyContext from "../../context/CreateContext";
 import { useContext } from "react";
 function ScrollTable() {
    const {darkMode, projectData , showTable , setShowTable} = useContext(MyContext)
    const navigate = useNavigate();
    const tableRowStyle = `flex justify-between items-center p-4 border-b transition-all duration-300 ${
    darkMode
      ? "border-gray-700 hover:bg-gray-700/50 text-gray-300"
      : "border-gray-100 hover:bg-gray-50 text-gray-600"
  }`;

 const tableContainerStyle = `fixed top-0 right-0 h-full w-[300px] xl:w-[500px]  md:w-[450px] shadow-2xl z-50 transition-transform duration-500 ease-in-out ${
  showTable ? "translate-x-0" : "translate-x-full"
} ${darkMode ? "bg-gray-800 border-l border-gray-700" : "bg-white border-l border-gray-200"}`;
   

  return (
   <>
    <div className={tableContainerStyle}>
                 <div className="flex flex-col h-full">
                   <div className="p-6 border-b border-gray-500/20 flex justify-between items-center">
                     <h3
                       className={`font-bold ${darkMode ? "text-white" : "text-black"} text-xl`}
                     >
                       All Projects
                     </h3>
                     <button
                       onClick={() => setShowTable(false)}
                       className="text-red-500 hover:scale-110"
                     >
                       ✕
                     </button>
                   </div>
                   <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                     {projectData.map((item, index) => (
                       <div key={index} className={tableRowStyle}>
                         <span className="font-medium">{item.projectName}</span>
                         <button
                           onClick={() => {
                             navigate(`/allProjectdata/${item._id}`);
                           }}
                           className="text-xs bg-cyan-600/20 text-cyan-500  px-3 py-1 rounded-full hover:bg-cyan-600 hover:text-white transition-all"
                         >
                           View Details
                         </button>
                       </div>
                     ))}
                   </div>
                 </div>
               </div>
   </>
  )
}

export default ScrollTable
