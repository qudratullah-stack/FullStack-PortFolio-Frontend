import MyContext from "../context/CreateContext";
import { useContext , useState} from "react";
import { LucideMail, LucideLock, LucideLogIn, LucideArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import Alert from "../componenets/partials/Alert";
import Loading from "../componenets/partials/Loading";
import axios from "axios";
function Login() {
  const { darkMode, setAlert, alert, setSuccess, success, loader, setloader } = useContext(MyContext);
const navigate = useNavigate()
const [Email, setEmail] = useState('')
const [Password, setPassword] = useState('')
const [emailBorder, setemailborder] = useState(false)
  const inputStyle = `w-full p-3 pl-10 rounded-xl border outline-none transition-all duration-300 text-sm md:text-base
  ${
    darkMode
      ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
      : "bg-white border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
  }`;
const saveLogin = async()=>{
  try{
    setloader(true)
   const res =  await axios.post('https://visiting-rochelle-qudratmasoom-d9c95190.koyeb.app/auth/login',{
        email: Email,
        password: Password
    })
   const token =  res.data.token
    localStorage.setItem('token',token)
    setAlert(true)
    setSuccess('Account Maked Successfully')
    navigate('/')
  }catch(err){
    setAlert(true)
    setSuccess('Invalid credentials')
  }finally{
    setloader(false)
  }
}
const handleLogin = ()=>{
   let inputtextmatch = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
       if(!inputtextmatch.test(Email)){
        setemailborder(true)
        setAlert(true)
        setSuccess('Please enter a valid email address')
        return
      }
  saveLogin()
  setPassword('')
}
  return (
    <>
    {alert && <Alert message={success} darkMode={darkMode} />}
    <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className={`w-full max-w-md p-8 rounded-3xl shadow-2xl transform transition-all duration-500 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-100'}`}>
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`inline-flex p-4 rounded-2xl mb-4 ${darkMode ? 'bg-blue-500/10 text-blue-500' : 'bg-blue-600/10 text-blue-600'}`}>
            <LucideLogIn size={32} />
          </div>
          <h2 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>Welcome Back</h2>
          <p className={`mt-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Please enter your details to sign in</p>
        </div>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
     
          <div className="relative">
            <LucideMail className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input type="email" placeholder="Email Address" value={Email} onChange={(e)=> {setEmail(e.target.value)}}  className={`${inputStyle} ${emailBorder?'border-red-600':'border-gray-700'}`} required />
          </div>
          <div className="relative">
            <LucideLock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input type="password" placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}} className={inputStyle}  />
          </div>
    
          <button 
            type="submit" 
            onClick={handleLogin}
            className={`w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg flex items-center justify-center gap-2
            ${darkMode ? 'bg-cyan-700 hover:bg-cyan-500 shadow-blue-900/20' : 'bg-cyan-600 hover:bg-cyan-700 shadow-blue-200'}`}
          >
           {loader? <Loading/> :'Sign In'}
            <LucideArrowRight size={18} />
          </button>
        </form>
        <div className="mt-8 text-center border-t pt-6 border-gray-500/10">
          <p className={`text-sm ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            Don't have an account? 
            <button onClick={()=>{navigate('/signup')}} className={`ml-1 font-bold hover:underline ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Create one</button>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;