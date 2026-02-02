import { useParams } from "react-router-dom";
import MyContext from "../context/CreateContext";
import { useContext } from "react";
import Navbar from "./partials/Navbar";
import {
  ExternalLink,
  Github,
  Moon,
  AlertCircle,
  CheckCircle2,
  Server,
} from "lucide-react";
import Loading from "./partials/Loading";

function AllProjectData() {
  const { id } = useParams();
  const { projectData, loader, darkMode } = useContext(MyContext);
  const project = projectData.find((item) => item._id === id);
  if (!project) {
    return (
      <div className="h-screen flex flex-col gap-7 items-center justify-center bg-black  text-cyan-700">
        {loader && <Loading />}
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto px-4 py-10">
        {/* Back Button & Dark Mode Toggle Style */}
        <div className="flex justify-between items-center mb-8">
          <div className={`p-2 ${darkMode?'bg-white/5':'bg-gray-600'} border border-white/10 rounded-full cursor-pointer hover:bg-white/10`}>
            <Moon size={20} className="text-cyan-400 bg-black rounded-full p-2 text-lg w-auto h-auto" />
          </div>
        </div>

        {/* Main Glassmorphism Form Card */}
        <div className={`${darkMode ? 'bg-white/5':'bg-white'} border border-white/10 rounded-2xl p-8 backdrop-blur-md shadow-2xl`}>
          <div className={`border-b ${darkMode?'border-white/10': 'border-gray-400'}  pb-6 mb-6`}>
            <h2 className={`text-3xl font-bold ${darkMode?'text-white':'text-black'} mb-2`}>
              {project.projectName}
            </h2>
            <span className="bg-cyan-500/10 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <p className="text-gray-400 leading-relaxed mb-8">
            {project.information}
          </p>

          {/* Links Section with Icons */}
          <div className="flex gap-4 mb-10">
            <a
              href={project.vercelLink}
              target="_blank"
              rel="noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl font-semibold transition-all"
            >
               {project.category.toLowerCase().includes('backend')? <Server size={18}/> : <ExternalLink size={18}/>} {`${project.category.toLowerCase().includes('backend')?'Railway Live': 'Vercel Live'} `}
            </a>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noreferrer"
              className={`flex-1 flex items-center justify-center gap-2 ${darkMode?'bg-white/5': 'bg-gray-700' }  hover:bg-gray-500 border border-white/10 text-white py-3 rounded-xl font-semibold transition-all`}
            >
              <Github size={18} /> GitHub Code
            </a>
          </div>

          {/* Problems & Solutions (Mapped) */}
          <div className="space-y-6">
            <h3 className={`text-xl font-semibold ${darkMode?'text-white':'text-black'} flex items-center gap-2`}>
              <AlertCircle size={20} className="text-cyan-500" /> Challenges &
              Solutions
            </h3>

            {project.problem &&
              project.problem.map((e: any) => (
                <div
                  key={e._id}
                  className={`${darkMode?'bg-white/5':'bg-gray-600'} border border-white/10 p-6 rounded-xl hover:border-cyan-500/30 transition-all`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <CheckCircle2 size={16} className="text-cyan-500" />
                    </div>
                    <div>
                      <h4 className="text-cyan-400 font-medium mb-2">
                        {e.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {e.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
      {/* </div> */}
    </>
  );
}

export default AllProjectData;
