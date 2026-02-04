import  { useContext, type Dispatch, type SetStateAction } from 'react';
import MyContext from '../../context/CreateContext';
import { FaGithub, FaLinkedin, FaYoutube,  FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = ({showtable}:{showtable: Dispatch<SetStateAction<boolean>>}) => {
  const { darkMode , setisServiceOpen} = useContext(MyContext);

  return (
    <footer className={`w-full pt-16 pb-8 px-6 mt-5 border-t ${darkMode ? 'bg-[#0b1120] border-gray-800 text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'}`}>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
        
       
        <div>
          <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Main</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to={'/'}>Home</Link></li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors"><Link to={'/contactUs'}>Contact Us</Link></li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors" ><span onClick={()=>showtable(true)}>Projects</span></li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors"> <button 
        onClick={() => setisServiceOpen(true)}>
        Services
      </button></li>
          </ul>
        </div>

        {/* کالم 2: Learn */}
        <div>
          <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Learn</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 cursor-pointer transition-colors">Tutorials</li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">Courses</li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">Notes</li>
          </ul>
        </div>
            <div>
          <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-500 cursor-pointer transition-colors">Terms</li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">Privacy</li>
            <li className="hover:text-blue-500 cursor-pointer transition-colors">Refund</li>
          </ul>
        </div>
        <div>
          <h3 className={`font-bold mb-4 ${darkMode ? 'text-white' : 'text-black'}`}>Social</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors">
              <FaGithub size={18} /> GitHub
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors">
              <FaLinkedin size={18} /> LinkedIn
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors">
              <FaTwitter size={18} /> Twitter (X)
            </li>
            <li className="flex items-center gap-2 hover:text-blue-500 cursor-pointer transition-colors">
              <FaYoutube size={18} /> YouTube
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-xs">
         <p>© 2026 Qudratullah | All rights reserved.</p>
         <p className="mt-2 md:mt-0 italic tracking-wider">
           Made with <span className="text-red-500">❤️</span> and 🍵 in Pakistan
         </p>
      </div>
    </footer>
  );
};

export default Footer;