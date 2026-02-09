import MyContext from "../../../context/CreateContext";
import { useContext, useState } from "react";
import axios from "axios";
import AdminForm from "./AdminForm";
import Loading from "../Loading";
import Alert from "../Alert";
import GrowthData from "./GrowthData";
import Footer from "../Footer";
import ScrollTable from "../ScrollTable";
import Services from "../Services";
function Admin() {
  const [GrowthTable, setGrowthTable] = useState(false)
  const [ViewData, setViewProjectData] = useState(false)
  const [openId, setOpenId] = useState<string | null>(null);
  const [boxOpen, setBoxOpen] = useState(false)
  // document style //////////
  const { darkMode,  loader ,setloader ,isServiceOpen,setAlert,setShowTable, alert, setSuccess,removeProject, success, projectData} =
    useContext(MyContext);
  const btnStyle = 'bg-cyan-600 w-75  p-3 m-2 rounded 3xl hover:bg-cyan-900'
 const deletData = async (id: string) => {
  try {
    setloader(true);

    await axios.delete(`http://localhost:9000/admin/deleteData/${id}`);
    removeProject(id)
     setOpenId(null); 
    setAlert(true)
    setSuccess('One Project Data is Deleted Successfully');
  } catch (err) {
    setSuccess('Data is not Deleted');
  } finally {
    setloader(false);
    
  }
};
  return (
    <>
      {alert && <Alert message={success} darkMode={darkMode} />}
    <AdminForm/>
      {/* ************  All Project Data For Update Delete And Get  ******************* */}
      <div className={`fixed top-0 overflow-auto right-0 px-8 h-full w-75 xl:w-125  md:w-112.5 shadow-2xl z-50 transition-transform duration-500 ease-in-out ${ViewData ? "translate-x-0" : "translate-x-full"
    } ${darkMode ? "bg-gray-800 border-l border-gray-700" : "bg-white border-l border-gray-200"}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-500/20 flex justify-between items-center">
            <h3
              className={`font-bold ${darkMode ? "text-white" : "text-black"} text-xl`}
            >
              All Project
            </h3>
            <button
              onClick={() => setViewProjectData(false)}
              className="text-red-500 hover:scale-110"
            >
              ✕
            </button>
          </div>
        {projectData.map((e) => (
  <div
    key={e._id}
    className="border-b border-gray-300 dark:border-gray-600 py-3"
  >
    {/* Selector / Header */}
    <button
      onClick={() => {setOpenId(openId === e._id ? null : e._id)
        setBoxOpen(false)
      }}
      className={`w-full text-left font-semibold ${darkMode?'text-white':'text-black'} text-lg flex justify-between items-center hover:text-blue-500 transition`}
    >
      {e.projectName}
      <span>{openId === e._id ? "▲" : "▼"}</span>
    </button>
    {/* Detail (only when selected) */}
    {openId === e._id && (
      <div className="mt-3 pl-3 relative space-y-2 text-sm">
        <p className={darkMode?'text-white':'text-black'}><b className="text-cyan-600">Category:</b> {e.category}</p>
        <p className={darkMode?'text-white':'text-black'}><b className="text-cyan-600">Vercel:</b> {e.vercelLink}</p>
        <p className={darkMode?'text-white':'text-black'}><b className="text-cyan-600">GitHub:</b> {e.githubLink}</p>
        <p className={darkMode?'text-white':'text-black'}><b className="text-cyan-600">Railway:</b> {e.railwayLink}</p>
        <p className={darkMode?'text-white':'text-black'}><b className="text-cyan-600">id:</b> {e._id}</p>
        <p className={darkMode?'text-white':'text-black'}><b className="text-cyan-600">Information:</b>{e.information}</p>
        {e.problem.map((element:{title: string; solution:string; _id:string})=>(
          <div key={element._id}>  <h2 className="font-bold text-xl text-cyan-600">{element.title}</h2>
          <p  className={darkMode?'text-white':'text-black'}>{element.solution}</p>
          </div>
        
      ))}
        <div className="flex gap-3 pt-2">
            <button onClick={()=>{
            setBoxOpen(!boxOpen)
           
          }} className="px-3 py-1 bg-red-500 text-white rounded">
         Delete
          </button>
        </div>
       {boxOpen && (
         <div className="flex flex-col absolute top-25 items-center gap-3 pt-4 bg-red-100 border border-red-300 p-4 rounded-md text-center">
    <p className="text-red-700 font-semibold text-sm">
      Are you sure you want to delete this project? This action cannot be undone.
    </p>
    <button
      onClick={() => deletData(e._id)}
      className="px-4 py-2 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition"
      >
      {loader ? <Loading /> : 'Delete'}
    </button>
    <button onClick={()=>{setBoxOpen(false)}} className="px-4 py-2 bg-cyan-500 text-white font-medium rounded hover:bg-cyan-600 transition">Cancle</button>
  </div>
)}
      </div>
    )}
  </div>
))}

         

        </div>
      </div>
      <div className="flex flex-col w-75 mx-auto gap-3 p-2">
        <button
          className={`${btnStyle} bg-cyan-600`}
          onClick={() => {
            setViewProjectData(true);
          }}
        >
          📋 View Projects
        </button>
        <button className={btnStyle} onClick={() => { setGrowthTable(true) }}>Add GrowthData</button>
        <GrowthData show={GrowthTable} setShow={setGrowthTable} />
      </div>
     {isServiceOpen && <Services/>}
<ScrollTable/>

             <Footer showtable = {setShowTable}/>
    </>
  );
}

export default Admin;
