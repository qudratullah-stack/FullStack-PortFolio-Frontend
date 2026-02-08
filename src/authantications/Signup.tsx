import MyContext from "../context/CreateContext";
import { useContext } from "react";
import { LucideUser, LucideMail, LucideLock, LucideUserPlus } from 'lucide-react';
import { useNavigate } from "react-router-dom";

function Signup() {
  const { darkMode } = useContext(MyContext);
  const navigate = useNavigate()

  const inputStyle = `w-full p-3 pl-10 rounded-xl border outline-none transition-all duration-300 text-sm md:text-base
  ${
    darkMode
      ? "bg-gray-800/50 border-gray-700 text-white focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20"
      : "bg-white border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
  }`;

  return (
    <div className={`min-h-screen flex items-center justify-center p-6 transition-colors duration-500 ${darkMode ? 'bg-gray-950' : 'bg-gray-50'}`}>
      <div className={`w-full max-w-md p-8 rounded-3xl shadow-2xl transform transition-all duration-500 ${darkMode ? 'bg-gray-900 border border-gray-800' : 'bg-white border border-gray-100'}`}>
        
        {/* Header */}
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
            <input type="text" placeholder="Full Name" className={inputStyle} minLength={3} required />
          </div>

          <div className="relative">
            <LucideMail className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input type="email" placeholder="Email Address" className={inputStyle} required />
          </div>
          <div className="relative">
            <LucideLock className="absolute left-3 top-3.5 text-gray-400" size={18} />
            <input type="password" placeholder="Password" className={inputStyle} required />
          </div>
          <button 
            type="submit" 
            className={`w-full py-3.5 rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg
            ${darkMode ? 'bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-cyan-900/20' : 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-blue-200'}`}
          >
            Get Started
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
  );
}

export default Signup;