import MyContext from "../context/CreateContext";
import { useContext, useState } from "react";
import Navbar from "./partials/Navbar";
import axios from "axios";
import { type problemType } from "../type/ArrayType";
import Loading from "./partials/Loading";
import Alert from "./partials/Alert";
function Admin() {
  // document style //////////
  const { darkMode, alert, success, setSuccess, setAlert, loader, setloader } =
    useContext(MyContext);
  const inputStyle = `w-full mt-4 p-3 rounded-lg border outline-none transition-all duration-300 
  ${
    darkMode
      ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
      : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
  }`;
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
      <Navbar />
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
              placeholder="Github Link"
              value={vercelLink}
              onChange={(e) => setvercelLink(e.target.value)}
              className={inputStyle}
            />
            <input
              type="text"
              placeholder="Vercel Link"
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
    </>
  );
}

export default Admin;
