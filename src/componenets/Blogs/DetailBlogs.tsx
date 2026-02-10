import MyContext from "../../context/CreateContext"
import { useContext } from "react"
import Caseblogs from '../Json/blog.json'
import { useParams, useNavigate } from "react-router-dom"
import Footer from "../partials/Footer"
import ScrollTable from "../partials/ScrollTable"
import Services from "../partials/Services"
function DetailBlogs() {
    const { darkMode , setShowTable , showTable, isServiceOpen} = useContext(MyContext)
    const { id } = useParams()
    const navigate = useNavigate()
    const blog = Caseblogs.find(e => e.id === id)
 if (!blog) return <div className="text-center text-4xl text-cyan-600 py-20">Blog not found!</div>

    return (
        <>
      
        <div className={`min-h-screen pt-24 pb-12 transition-colors duration-300 ${darkMode ? '#F0F2F5 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex items-center justify-between mb-8">
                    <button 
                        onClick={() => navigate(-1)}
                        className={`flex items-center gap-2 text-sm font-semibold hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}
                    >
                        ← Back to Blogs
                    </button>
                    <span className="bg-blue-600/10 text-blue-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase">
                        {blog.category}
                    </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                    {blog.title}
                </h1>
                <div className="flex flex-wrap gap-4 mb-10 text-sm opacity-70 border-b border-gray-500/20 pb-6">
                    <span>📅 {blog.date}</span>
                    <span>📂 Project: {blog.relatedProject}</span>
                </div>
                <div className="w-full h-75 md:h-125 rounded-3xl overflow-hidden mb-12 shadow-2xl">
                    <img 
                        src={blog.image} 
                        alt={blog.title} 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="space-y-12 leading-relaxed text-lg">
                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-blue-600">01.</span> The Problem
                        </h2>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {blog.problem}
                        </p>
                    </section>
                    <section className={`p-8 rounded-3xl ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white shadow-lg border border-gray-100'}`}>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-blue-600">
                            🚀 The Solution
                        </h2>
                        <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {blog.solution}
                        </p>
                        {blog.codeSnippet && (
                            <div className="relative group">
                                <div className="absolute -top-3 left-4 bg-gray-800 text-[10px] text-white px-2 py-0.5 rounded italic">Code Snippet</div>
                                <pre className="bg-black text-green-400 p-6 rounded-2xl overflow-x-auto 
                                 text-sm font-mono border border-gray-800">
                                    <code>{blog.codeSnippet}</code>
                                </pre>
                            </div>
                        )}
                    </section>

                  {showTable && <ScrollTable/>}
                  {isServiceOpen && <Services/>}
                    <section>
                        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                            <span className="text-blue-600">02.</span> Impact & Result
                        </h2>
                        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {blog.impact}
                        </p>
                    </section>

                    {/* Tech Stack Used */}
                    <div className="pt-8 border-t border-gray-500/20">
                        <h4 className="text-sm font-bold uppercase mb-4 tracking-widest opacity-50">Technologies Used</h4>
                        <div className="flex flex-wrap gap-3">
                            {blog.techStack.map((tech, index) => (
                                <span key={index} className={`px-4 py-2 rounded-xl text-xs font-bold ${darkMode ? 'bg-gray-800 text-blue-400' : 'bg-gray-100 text-blue-600'}`}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <Footer showtable={setShowTable}/>
          </>
    )
}

export default DetailBlogs