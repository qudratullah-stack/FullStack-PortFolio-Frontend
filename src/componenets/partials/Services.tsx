
import MyContext from "../../context/CreateContext"
import { useContext } from "react"
function Services() {
    const {darkMode, setisServiceOpen } = useContext(MyContext)
  return (
    <>
   <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto h-screen py-10">
    <div className={`relative w-full max-w-2xl p-8 rounded-3xl shadow-2xl border max-h-[90vh] overflow-y-auto ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
    
      <h2 className={`text-3xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-black'}`}>My Services</h2>
      <span className="absolute text-4xl cursor-pointer hover:text-red-900 text-red-600 top-5 right-6" onClick={()=> setisServiceOpen(false)}>  ✕ </span>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Service 1 */}
        <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
          <div className="text-3xl mb-3">💻</div>
          <h3 className={`font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Full Stack Web Dev</h3>
          <p className="text-sm opacity-80">Building complete web applications from scratch using MERN Stack with clean and scalable code.</p>
        </div>

        {/* Service 2 */}
        <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
          <div className="text-3xl mb-3">📱</div>
          <h3 className={`font-bold mb-2 ${darkMode ? 'text-green-400' : 'text-green-600'}`}>Responsive UI/UX</h3>
          <p className="text-sm opacity-80">Designing modern, mobile-first interfaces that provide an exceptional user experience across all devices.</p>
        </div>

        {/* Service 3 */}
        <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
          <div className="text-3xl mb-3">⚙️</div>
          <h3 className={`font-bold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>API & Backend</h3>
          <p className="text-sm opacity-80">Developing secure RESTful APIs and robust backend systems to power your business logic.</p>
        </div>

        {/* Service 4 */}
        <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
          <div className="text-3xl mb-3">🚀</div>
          <h3 className={`font-bold mb-2 ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>Maintenance & SEO</h3>
          <p className="text-sm opacity-80">Optimizing websites for search engines and providing ongoing technical support and updates.</p>
        </div>
      </div>
    </div>
</div>
    </>
  )
}

export default Services
