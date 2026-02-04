import MyContext from "../../context/CreateContext"
import { useContext, useState } from "react"
import Alert from "./Alert";

function ContectForm() {
    const { 
    contactName, setContactName, 
    contactEmail, setContactEmail, 
    contactMessage, setContactMessage, 
    contactUs, loader, success , alert, darkMode, setAlert, setSuccess
  } = useContext(MyContext)
  const [inputborder, setInputborder] = useState(false)
    const handleSubmit = (e:any) => {
      e.preventDefault();
       let inputtextmatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!inputtextmatch.test(contactEmail)){
        setInputborder(true)
        setAlert(true)
        setSuccess('Please enter a valid email address')
        return
       }
    contactUs();
    setContactEmail('')
    setContactName('')
    setContactMessage('')
   
  };
 
  const inputStyle = `w-full flex  p-3 ${darkMode?'bg-gray-800 text-white':'bg-gray-300 text-black'} border   rounded-lg  focus:outline-none focus:border-blue-500 transition-all`
  return (
    <>
     {alert && <Alert message={success} darkMode={darkMode} />}
     <div className={` flex-1  p-8 ${darkMode?'bg-gray-900 border-gray-800': 'bg-white border-gray-400'}  border rounded-2xl shadow-xl`}>
      <h2 className={`text-2xl font-bold ${darkMode? 'text-white':'text-black'} mb-6 text-center`}>Get In Touch</h2>
      
      <form onSubmit={handleSubmit} className="space-y-5 relative">
        <div>
          <input 
            type="text" 
            placeholder="Your Name"
            value={contactName}
            onChange={(e) => setContactName(e.target.value)}
            className= {inputStyle}
            required
            minLength={3}
          />
        </div>

        <div>
          <input 
            type="email" 
            placeholder="Your Email"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
            className={`${inputStyle} ${inputborder?'border-red-600':'border-gray-700'}`}
            required
            
          />
          
        </div>

        <div>
          <textarea 
            placeholder="Your Message"
            rows={4}
            value={contactMessage}
            onChange={(e) => setContactMessage(e.target.value)}
            className={inputStyle}
            required
          ></textarea>
        </div>
        <button onClick={handleSubmit} className={`w-full  bg-cyan-600 hover:bg-cyan-500 py-3 rounded-lg font-bold transition-all duration-300 flex justify-center items-center`}>
         { loader?'Sending...': "Send Message"}
        </button>
      {alert && success === "Message Send Successfully" && (
  <h4 className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-full mb-4 w-full text-center font-medium p-12 rounded-3xl text-2xl bg-gray-900 border border-gray-800 text-green-400">
    Message Received! 
    <p className="text-gray-300 text-xs leading-tight">
      Thank you for reaching out! I typically respond within <span className="text-white font-semibold">24 hours</span>. Check your inbox soon.
    </p>
  </h4>
)}
      </form>
    </div>
    
    </>
  )
}

export default ContectForm
