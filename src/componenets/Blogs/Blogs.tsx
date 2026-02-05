import Caseblog from '../Json/blog.json'
import { useNavigate } from 'react-router-dom'
import MyContext from '../../context/CreateContext'
import { useContext, useState } from 'react'
import Footer from '../partials/Footer'
import Services from '../partials/Services'
import ScrollTable from '../partials/ScrollTable'
function Blogs() {
    const {darkMode, showTable , setShowTable, isServiceOpen} = useContext(MyContext)
    const [pagelength , setPagelength] = useState(1)
    const [addIndex , setaddIndex] = useState('→ Read More')
    const [lessIndex , setLessIndex] = useState('← Previous')
    const pagedata = 6;
    const startIndex = (pagelength -1) * pagedata
    const endIndex = startIndex + pagedata
    const filterData = Caseblog.slice(startIndex, endIndex)
    const hanleAdd = ()=>{
        if(pagelength * pagedata < Caseblog.length){
            setPagelength(pagelength + 1)
            setaddIndex('→ Read More')
            setLessIndex('← Previous')
        }else{
            setaddIndex('No More Data')
        }
    }
    const handleLess = ()=>{
        if(pagelength > 1){
            setPagelength(pagelength - 1)
            setaddIndex('→ Read More')
         setLessIndex('← Previous')
        }else{
            setLessIndex('No Previous')
        }
    }
    const navigate = useNavigate()
  return (
   <>
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
  {filterData.map((item) => (
    <div 
      key={item.id} 
      className={`group relative flex flex-col rounded-3xl border transition-all duration-300 hover:shadow-2xl ${
        darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
      }`}
    >
      {/* Image Section */}
      <div className="relative h-52 w-full overflow-hidden rounded-t-3xl">
        <img 
          src={item.image} 
          alt={item.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            {item.category}
          </span>
        </div>
      </div>
        <div className="absolute bottom-82.5 md:bottom-72 lg:bottom-75 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-lg">
          {Math.ceil(item.description.split('').length/200)} min read
        </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col grow">
        <span className="text-xs text-gray-500 mb-2">{item.date}</span>
        
        <h3 className={`text-xl font-bold mb-3 line-clamp-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          {item.title}
        </h3>

        <p className={`text-sm mb-4 line-clamp-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {item.description}
        </p>

        {/* Tech Stack - Small Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {item.techStack?.map((tech, idx) => (
            <span key={idx} className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-md">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-auto">
          <button onClick={()=>{navigate(`/detailblogs/${item.id}`)}} className={`w-full font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border ${
            darkMode 
            ? 'bg-green-600/10 text-green-500 border-green-500/20 hover:bg-green-600 hover:text-white' 
            : 'bg-green-50 text-green-600 border-green-100 hover:bg-green-600 hover:text-white'
          }`}>
            Read More
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </div>
  ))}
   
</div>
    <div className="parent w-75 flex flex-col gap-6 mx-auto my-5">
    <button className={`w-full font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border ${
            darkMode 
            ? 'bg-cyan-600/10 text-cyan-500 border-cyan-500/20 hover:bg-cyan-600 hover:text-white' 
            : 'bg-cyan-200 text-cyan-600 border-cyan-100 hover:bg-cyan-600 hover:text-white'
          }`} onClick={hanleAdd}>{addIndex }</button>
       <button className={`w-full font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border ${
            darkMode 
            ? 'bg-cyan-600/10 text-cyan-500 border-cyan-500/20 hover:bg-cyan-600 hover:text-white' 
            : 'bg-cyan-200 text-cyan-600 border-cyan-100 hover:bg-cyan-600 hover:text-white'
          }`} onClick={handleLess}> {lessIndex}</button> 
    </div>
      {isServiceOpen && <Services/>}
   {showTable && <ScrollTable/>}
    <Footer showtable={setShowTable}/>
   </>
  )
}

export default Blogs
