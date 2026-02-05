
import myImage from '../assets/homepagebg.jpeg'

import AboutInformationCards from './partials/AboutInformationCards';
import MyContext from '../context/CreateContext';
import { useContext } from 'react';


 
function About() {
 
 const {darkMode} = useContext(MyContext)
  return (
   <>
    <section className={`py-20 transition-colors duration-500 ${darkMode ? 'bg-[#020617] text-white' : 'bg-white text-gray-900'}`}>
  <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
    
    <div className="relative shrink-0">
      <div className={`w-64 h-64 md:w-80 md:h-80 rounded-[60px] overflow-hidden border-4 ${darkMode ? 'border-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.2)]' : 'border-blue-600 shadow-xl'} transform rotate-3 hover:rotate-0 transition-all duration-500`}>
        <img 
          src={myImage}
          alt="Walia Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      {/* سجاوٹ کے لیے ایک پیچھے والا باکس */}
      <div className="absolute -z-10 inset-0 bg-blue-600/20 rounded-[60px] -rotate-6"></div>
    </div>

    {/* تحریر والا حصہ */}
    <div className="flex-1 text-center t space-y-6">
      <div className="inline-block px-4 py-1 rounded-full bg-blue-600/10 text-blue-600 text-sm font-bold tracking-widest uppercase">
        Available for Hire
      </div>
      <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">
        Assalam-o-Alaikum,<br />
        I am <span className="text-blue-600">QudratMasoom</span>
      </h1>
      <p className={`text-xl leading-relaxed max-w-2xl ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        A passionate <span className="font-bold text-blue-500">Full Stack MERN Developer</span>. 
        I specialize in building production-ready web applications, focusing on clean architecture, 
        high performance, and scalable real-world solutions.
      </p>
      
      <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">
        {['React', 'Node.js', 'MongoDB', 'Tailwind'].map((skill) => (
          <span key={skill} className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tighter border ${darkMode ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'}`}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>
   <AboutInformationCards/>
   </>
  )
}

export default About
