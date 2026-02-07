
import MyContext from "../../../context/CreateContext"
import { useContext } from "react"
import ContectForm from "./ContectForm";
import ContactImg from '../../../assets/contactPage.jpeg'
import Footer from "../Footer";
import ScrollTable from "../ScrollTable";
import Services from "../Services";
function ContactUs() {
  const {darkMode , setShowTable, isServiceOpen, showTable} = useContext(MyContext)
  return (
  <>
  <div className={`min-h-screen  lg:p-12 ${darkMode ? '#111827 text-white' : '#F0F2F5 text-black'}`}>
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 mt-10">
    
    <div className="w-full lg:w-1/3 flex flex-col items-center">
  <div className={`relative p-2 rounded-2xl border ${darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'} shadow-2xl overflow-hidden w-full max-w-100`}>
  <img 
    src={ContactImg} 
    alt="Qudratullah" 
    className="w-full h-75 rounded-xl object-cover object-top"
  />
</div>
    <div className="mt-4 text-center lg:text-left px-2">
  <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>Qudratullah</h2>
  <p className="text-blue-500 font-medium mb-4 text-sm tracking-wide">MERN STACK DEVELOPER</p>
  
  <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
    Helping businesses build scalable and high-performance web applications with a focus on user experience.
  </p>
</div>
     {showTable && <ScrollTable/>}
    {isServiceOpen && <Services/>}
      <div className="mt-8 w-full max-w-80.5 space-y-4">
        <a 
          href="https://wa.me/923162538676" 
          target="_blank" 
          className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-green-600/10 border border-green-600/30 text-green-500 hover:bg-green-600 hover:text-white transition-all duration-300"
        >
          <span className="text-2xl">💚</span>
          <span className="font-bold tracking-wide">Chat on WhatsApp</span>
        </a>
        <a 
          href="mailto:qudratullahmasoom6688@gmail.com" 
          className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-blue-600/10 border border-blue-600/30 text-blue-500 hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          <span className="text-2xl">📧</span>
          <span className="font-bold tracking-wide">Send an Email</span>
        </a>
      </div>
    </div>
    <div className="w-full lg:flex-1">
      <div className={`p-8 flex flex-col w-full justify-center' }`}>
         <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-10 items-center text-center">Let's Work Together</h2>
       <ContectForm/>
      </div>
    </div>

  </div>
</div>
        <Footer showtable = {setShowTable}/>
  </>
  )
}

export default ContactUs;
