import MyContext from "../context/CreateContext";
import { useContext, useState } from "react";
import axios from "axios";
import { type problemType } from "../type/ArrayType";
import Loading from "./partials/Loading";
import Alert from "./partials/Alert";
function Admin() {
  const [showTable , setShowTable] = useState(false)
  // document style //////////
  const { darkMode, alert, success, setSuccess, setAlert, loader, setloader } =
    useContext(MyContext);
  const inputStyle = `w-full mt-4 p-3 rounded-lg border outline-none transition-all duration-300 
  ${
    darkMode
      ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
      : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
  }`;
  // ////////////   Scrool form style
  const tableContainerStyle = `fixed top-0 right-0 h-full w-[300px] xl:w-[500px]  md:w-[450px] shadow-2xl z-50 transition-transform duration-500 ease-in-out ${
  showTable ? "translate-x-0" : "translate-x-full"
} ${darkMode ? "bg-gray-800 border-l border-gray-700" : "bg-white border-l border-gray-200"}`;
  ////// Form State ///////////
  const [projectname, setprojectname] = useState("");
  const [category, setcategory] = useState("");
  const [vercelLink, setvercelLink] = useState("");
  const [githubLink, setgithubLink] = useState("");
  const [railwayLink, setrailwayLink] = useState("");
  const [infomation, setinfomation] = useState("");
  const [problemTitle, setproblem] = useState("");
  const [solution, setsolution] = useState("");
  const [AllProblems, setAllproblems] = useState<problemType[]>([]);
  //   ///////////// handle button /////////////
  const handleAddmoreproblems = () => {
    setAllproblems([
      ...AllProblems,
      { title: problemTitle, solution: solution },
    ]);
    setproblem("");
    setsolution("");
  };
  const savedata = async () => {
    try {
      setloader(true);
      await axios.post("http://localhost:9000/admin/create/data", {
        projectName: projectname,
        category: category,
        githubLink: githubLink,
        vercelLink: vercelLink,
        railwayLink: railwayLink,
        information: infomation,
        problem: AllProblems,
      });
      setloader(false);
      setAlert(true);
      setSuccess("Data Saved Succeffully");
    } catch (err) {
      setAlert(true);
      setSuccess("Data Not Saved ");
      console.log(err);
    } finally {
      setloader(false);
    }
  };
  const handleSaveProject = () => {
    savedata();
    setprojectname("");
    setcategory("");
    setgithubLink("");
    setvercelLink("");
    setinfomation("");
    setrailwayLink("");
  };
  ////////////////////////////
  return (
    <>
      {alert && <Alert message={success} darkMode={darkMode} />}
    
      <div
        className={`project flex flex-col w-full items-center min-h-screen p-7 transition-colors duration-500 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
      >
        <div
          className={`form flex flex-col w-full max-w-2xl p-8 rounded-2xl shadow-xl ${darkMode ? "bg-gray-800/50 border border-gray-700" : "bg-white"}`}
        >
          <h2 className="font-extrabold text-3xl mb-6 text-center tracking-tight">
            Add <span className="text-cyan-500">New Project</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Project Name"
              value={projectname}
              onChange={(e) => setprojectname(e.target.value)}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Vercel Link {First add https://}"
              value={vercelLink}
              onChange={(e) => setvercelLink(e.target.value)}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Github Link "
              value={githubLink}
              onChange={(e) => setgithubLink(e.target.value)}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Railway Link"
              value={railwayLink}
              onChange={(e) => setrailwayLink(e.target.value)}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Information"
              value={infomation}
              onChange={(e) => setinfomation(e.target.value)}
              className={inputStyle}
            />
          </div>

          <div className="mt-8 p-4 rounded-xl border border-dashed border-gray-500">
            <p className="text-sm font-semibold mb-2 text-cyan-500 uppercase tracking-widest">
              Problem & Solution
            </p>
            <input
              type="text"
              placeholder="Problem Title"
              value={problemTitle}
              onChange={(e) => setproblem(e.target.value)}
              className={inputStyle}
            />
            <textarea
              placeholder="Problem Solution"
              value={solution}
              onChange={(e) => setsolution(e.target.value)}
              className={`${inputStyle} h-32 resize-none`}
            ></textarea>
            <button onClick={handleAddmoreproblems}>Add More</button>
          </div>

          <button
            onClick={handleSaveProject}
            className="mt-8 w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-transform active:scale-95 shadow-lg shadow-cyan-500/20"
          >
            {loader ? <Loading /> : "Upload Project to Cloud"}
          </button>
        </div>
      </div>
       <button
              className="my-auto w-50 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg "
              onClick={() => {
                setShowTable(true);
              }}
            >
              📋 View Projects
            </button>
       <div className={tableContainerStyle}>
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-gray-500/20 flex justify-between items-center">
                  <h3 className={`font-bold ${darkMode?'text-white':'text-black'} text-xl`}>All Projects</h3>
                  <button
                    onClick={() => setShowTable(false)}
                    className="text-red-500 hover:scale-110"
                  >
                    ✕
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto custom-scrollbar p-2">
                
                </div>
              </div>
            </div>
    </>
  );
}

export default Admin;
