import { useParams, useNavigate } from "react-router-dom"
import MyContext from "../../context/CreateContext"
import { useContext } from "react"
import EducationalData from '../Json/educational.json'
import Footer from "../partials/Footer"
import ScrollTable from "../partials/ScrollTable"
import Services from "../partials/Services"
function DetailEducational() {
    const { darkMode , setShowTable , showTable , isServiceOpen} = useContext(MyContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const data = EducationalData.find(e => e.id === id)

    if (!data) return <div className="text-center py-20 font-bold">Article Not Found!</div>

    return (
        <>
        <div className={`min-h-screen pt-24 pb-12 transition-all duration-300 ${darkMode ? '#F0F2F5 text-white' : 'bg-gray-50 text-gray-900'}`}>
            <div className="max-w-4xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="flex items-center justify-between mb-8">
                    <button 
                        onClick={() => navigate(-1)}
                        className={`group flex items-center gap-2 text-sm font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back
                    </button>
                    <div className="flex gap-3">
                        <span className="bg-green-600/10 text-green-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                            {data.category}
                        </span>
                        <span className="bg-gray-500/10 text-gray-500 text-[10px] font-bold px-3 py-1 rounded-full">
                            {data.readTime}
                        </span>
                    </div>
                </div>

                {/* Title & Description */}
                <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                    {data.title}
                </h1>
                <p className={`text-xl mb-10 leading-relaxed opacity-80 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {data.description}
                </p>

                {/* Main Image */}
                <div className="w-full h-75 md:h-125 rounded-[40px] overflow-hidden mb-12 shadow-2xl border-4 border-white/5">
                    <img 
                        src={data.image} 
                        alt={data.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Article Content */}
                <div className="grid grid-cols-1 gap-12">
                  {showTable && <ScrollTable/>}
                    {isServiceOpen && <Services/>}
                    {/* Main Points Section */}
                    <section className={`p-8 md:p-12 rounded-4xl ${darkMode ? 'bg-gray-900/50 border border-gray-800' : 'bg-white shadow-xl border border-gray-100'}`}>
                        <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <span className="bg-green-500 w-2 h-8 rounded-full"></span>
                            Key Learning Points
                        </h2>
                        <ul className="space-y-6">
                            {data.mainPoints?.map((point, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="shrink-0 w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center text-xs font-bold mt-1">
                                        {index + 1}
                                    </div>
                                    <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                        {point}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Conclusion Section */}
                    <section className="border-l-4 border-green-500 pl-8 my-8">
                        <h3 className="text-xl font-bold mb-3 italic text-green-500">Summary & Conclusion</h3>
                        <p className={`text-lg italic leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            "{data.conclusion}"
                        </p>
                    </section>

                    {/* Footer Tech Tags */}
                    <div className="pt-10 border-t border-gray-500/10">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4 opacity-40">Relevant Technologies</p>
                        <div className="flex flex-wrap gap-2">
                            {data.techStack?.map((tech, idx) => (
                                <span key={idx} className={`px-4 py-1.5 rounded-lg text-xs font-mono ${darkMode ? 'bg-gray-800 text-green-400' : 'bg-green-50 text-green-700'}`}>
                                    #{tech}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
     <Footer showtable = {setShowTable}/>
     </>
    )
}

export default DetailEducational