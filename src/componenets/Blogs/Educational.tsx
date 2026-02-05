import MyContext from "../../context/CreateContext"
import { useContext , useState} from "react"
import educationalblog from '../Json/educational.json'
import { useNavigate } from "react-router-dom"
import Services from "../partials/Services"
import ScrollTable from "../partials/ScrollTable"
import Footer from "../partials/Footer"
function Educational() {
    const navigate = useNavigate()
    const {darkMode, showTable, setShowTable , isServiceOpen} = useContext(MyContext)
     const [pagelength , setPagelength] = useState(1)
        const [addIndex , setaddIndex] = useState('→ Read More')
        const [lessIndex , setLessIndex] = useState('← Previous')
        const pagedata = 6;
        const startIndex = (pagelength -1) * pagedata
        const endIndex = startIndex + pagedata
        const filterData = educationalblog.slice(startIndex, endIndex)
        const hanleAdd = ()=>{
            if(pagelength * pagedata < educationalblog.length){
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
  return (
  <>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
  {filterData.map((item) => (
    <div 
      key={item.id} 
      className={`group relative flex flex-col rounded-3xl border transition-all duration-500 hover:-translate-y-2 ${
        darkMode ? 'bg-gray-900 border-gray-800 hover:border-green-500/50' : 'bg-white border-gray-100 shadow-xl'
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden rounded-t-3xl">
        <img 
          src={item.image} 
          alt={item.title} 
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
            {item.category}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-lg">
          {Math.ceil(item.description.split('').length/200)} min read
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <h3 className={`text-xl font-bold mb-3 line-clamp-2 transition-colors ${
          darkMode ? 'text-white group-hover:text-green-400' : 'text-gray-800 group-hover:text-green-600'
        }`}>
          {item.title}
        </h3>

        <p className={`text-sm mb-4 line-clamp-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {item.description}
        </p>
        <div className="space-y-2 mb-6">
          {item.mainPoints?.slice(0, 2).map((point, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
              <span className={`text-[11px] font-medium ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
                {point}
              </span>
            </div>
          ))}
        </div>
        <div onClick={()=>{navigate(`/learningblogdetail/${item.id}`)}} className="mt-auto">
          <button className={`w-full font-bold py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 border ${
            darkMode 
            ? 'bg-green-600/10 text-green-500 border-green-500/20 hover:bg-green-600 hover:text-white' 
            : 'bg-green-50 text-green-600 border-green-100 hover:bg-green-600 hover:text-white'
          }`}>
            Read Article
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

export default Educational
