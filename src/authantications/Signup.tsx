import MyContext from "../context/CreateContext";
import { useContext, useState } from "react";
import { LucideUser, LucideMail, LucideLock, LucideUserPlus } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from "../componenets/partials/Alert";
import Loading from "../componenets/partials/Loading";

function Signup() {
  const { darkMode, setAlert, alert, loader, setloader, success, setSuccess } = useContext(MyContext);
  const navigate = useNavigate()
  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setpassword] = useState('')
  const [emailBorder, setemailborder] = useState(false)
  
  const createAccount = async()=>{
    try{
      setloader(true)
      await axios.post(`${import.meta.env.VITE_BEACKEND_URL}/auth/signup`,{
         name: name,
            email: email,
            password: password
      })
      
      setAlert(true)
      setSuccess('Account Created Successfully')
    }catch(err){
      setAlert(true)
      setSuccess('Your account could not be created')
    }finally{
      setloader(false)
    }
  }
  const handleSubmit = ()=>{
     let inputtextmatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!inputtextmatch.test(email)){
        setemailborder(true)
        setAlert(true)
        setSuccess('Please enter a valid email address')
        return
      }
    createAccount()
    setName('')
    setEmail('')
    setpassword('')
  }
  const inputStyle = `w-full p-3 pl-10 rounded-xl border outline-none transition-all duration-300 text-sm md:text-base
  ${
    darkMode
      ? "bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
      : "bg-white border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
  }`;

  return (
    <>
     {alert && <Alert message={success} darkMode={darkMode} />}
    <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className={`w-full max-w-md p-8 rounded-3xl shadow-2xl transform transition-all duration-500 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-100'}`}>
        
        <div className="text-center mb-8">
          <div className={`inline-flex p-4 rounded-2xl mb-4 ${darkMode ? 'bg-cyan-500/10 text-cyan-500' : 'bg-blue-500/10 text-blue-600'}`}>
            <LucideUserPlus size={32} />
          </div>
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Create Account</h2>
          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Join Qudrat's Portfolio Community</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div className="relative">
            <LucideUser className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input type="text" placeholder="Full Name" onChange={(e)=>{
              setName(e.target.value)
            }} value={name} className={inputStyle} minLength={3} required />
          </div>

          <div className="relative">
            <LucideMail className={'absolute left-3 top-3.5 text-gray-400'} size={18} />
            <input type="email" placeholder="Email Address" onChange={(e)=>{
              setEmail(e.target.value)
            }} value={email}  className={`${inputStyle} ${emailBorder?'border-red-600':'border-gray-700'}`} required />
          </div>
          <div className="relative">
            <LucideLock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input type="password" placeholder="Password" onChange={(e)=>{
              setpassword(e.target.value)
            }} value={password} className={inputStyle} required />
          </div>
          <button 
          onClick={handleSubmit}
            type="submit" 
            className={`w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-2
            ${darkMode ? 'bg-cyan-700 hover:bg-cyan-500 shadow-blue-900/20' : 'bg-cyan-600 hover:bg-cyan-700 shadow-blue-200'}`}
          >
           { loader? <Loading/>:'Get Started'}
          </button>
        </form>

        <div className="mt-8 text-center">
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Already have an account? 
            <button onClick={()=>{navigate('/login')}} className={`ml-1 font-bold hover:underline ${darkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Log in</button>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Signup;