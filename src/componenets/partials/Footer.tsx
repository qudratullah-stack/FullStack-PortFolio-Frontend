import { useContext, type Dispatch, type SetStateAction } from 'react';
import MyContext from '../../context/CreateContext';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = ({ showtable }: { showtable: Dispatch<SetStateAction<boolean>> }) => {
  const { darkMode, setisServiceOpen } = useContext(MyContext);

  return (
    <footer className={`w-full pt-16 pb-8 px-6 md:px-12 mt-10 border-t transition-colors duration-300 ${darkMode ? 'bg-[#0b1120] border-gray-800 text-gray-400' : 'bg-white border-gray-200 text-gray-600'}`}>
      
      {/* Grid Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-12 text-center md:text-left">
        
        {/* کالم 1: Main */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className={`font-bold mb-6 uppercase tracking-widest text-sm ${darkMode ? 'text-white' : 'text-black'}`}>Main</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li className="hover:text-blue-500 transition-colors"><Link to={'/'}>Home</Link></li>
            <li className="hover:text-blue-500 transition-colors"><Link to={'/contactUs'}>Contact Us</Link></li>
            <li className="hover:text-blue-500 transition-colors cursor-pointer" onClick={() => showtable(true)}>Projects</li>
            <li>
              <button onClick={() => setisServiceOpen(true)} className="hover:text-blue-500 transition-colors">
                Services
              </button>
            </li>
          </ul>
        </div>

        {/* کالم 2: Learn */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className={`font-bold mb-6 uppercase tracking-widest text-sm ${darkMode ? 'text-white' : 'text-black'}`}>Learn</h3>
          <ul className="space-y-3 text-sm font-medium">
            <li className="hover:text-blue-500 transition-colors"><Link to={'/blog'}>Case Studies</Link></li>
            <li className="hover:text-blue-500 transition-colors"><Link to={'/learning'}>Tech Insights</Link></li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h3 className={`font-bold mb-6 uppercase tracking-widest text-sm ${darkMode ? 'text-white' : 'text-black'}`}>Social</h3>
          <ul className="space-y-4 text-sm font-medium">
            <li>
              <a href="https://github.com/qudratullah-stack" target='_blank' className="flex items-center gap-3 hover:text-blue-500 transition-colors justify-center md:justify-start">
                <FaGithub size={20} /> <span>GitHub</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com" target='_blank' className="flex items-center gap-3 hover:text-blue-500 transition-colors justify-center md:justify-start">
                <FaLinkedin size={20} /> <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://www.x.com" target='_blank' className="flex items-center gap-3 hover:text-blue-500 transition-colors justify-center md:justify-start">
                <FaTwitter size={20} /> <span>Twitter (X)</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={`max-w-7xl mx-auto pt-8 border-t flex flex-col md:flex-row justify-between items-center text-[11px] uppercase tracking-tighter ${darkMode ? 'border-gray-800/50' : 'border-gray-200'}`}>
         <p>© 2026 Qudratullah | All rights reserved.</p>
         <p className="mt-4 md:mt-0 flex items-center gap-1 opacity-80">
           Handcrafted with <span className="text-red-500 animate-pulse text-sm">❤️</span> in Pakistan
         </p>
      </div>
    </footer>
  );
};

export default Footer;