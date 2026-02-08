
import { slides } from '../partials/Array';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../context/CreateContext';
import { useContext } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function AboutInformationCards() {
     const { darkMode } = useContext(MyContext);
  const [currentSlide, setCurrentSlide] = useState(0);
   const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
const navigate = useNavigate()
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
   <>
     <div className={`w-full min-h-screen flex flex-col items-center justify-center p-4 pt-20 transition-colors duration-500 ${darkMode ? 'bg-[#020617] text-white' : 'bg-gray-100 text-gray-900'}`}>
      
      <div className={`relative w-full max-w-5xl h-137.5 rounded-[40px] overflow-hidden shadow-2xl border ${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        
        <div 
          className="flex h-full transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={slide.id} className="min-w-full h-full flex items-center justify-center p-8 md:p-16">
              
              <div className="w-full text-center">
                {slide.type === "hero" && (
                  <div className="animate-in fade-in zoom-in duration-700">
                    <div className="flex justify-center mb-4">{slide.icon}</div>
                    <h1 className="text-3xl md:text-7xl font-black tracking-tighter uppercase">{slide.title}</h1>
                    <p className="text-xl text-blue-500 font-bold tracking-widest uppercase">{slide.subtitle}</p>
                    <p className="max-w-xl mx-auto opacity-70 text-lg mt-4">{slide.desc}</p>
                    <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full mt-6"></div>
                  </div>
                )}
                {/* 4. Experience Slide Type */}
{slide.type === "experience" && (
  <div className="w-full h-full flex flex-col justify-center overflow-y-auto custom-scrollbar py-10 md:py-0">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 shrink-0">{slide.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center">
      {slide.items?.map((item, i) => (
        <div key={i} className={`p-6 md:p-8 rounded-3xl border transition-all ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100 shadow-sm'}`}>
          <div className="text-3xl md:text-4xl text-blue-600 mb-3 flex justify-center">{item.icon}</div>
          <h3 className="font-bold text-lg md:text-xl mb-2">{item.title}</h3>
          <p className="text-xs md:text-sm opacity-60 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
)}

{/* 5. Mission Slide Type */}
{slide.type === "mission" && (
  <div className="animate-in fade-in zoom-in duration-700">
    <div className="flex justify-center mb-4">{slide.icon}</div>
    <h1 className="text-4xl md:text-6xl font-black tracking-tighter uppercase mb-4">{slide.title}</h1>
    <p className="text-lg text-blue-500 font-bold uppercase tracking-widest mb-6">{slide.subtitle}</p>
    <p className="max-w-2xl mx-auto opacity-70 text-xl leading-relaxed italic border-l-4 border-blue-600 pl-6 py-2">
      "{slide.desc}"
    </p>
  </div>
)}

                {slide.type === "skills" && (
                  <div className="w-full max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-10">{slide.title}</h2>
                    <div className="space-y-6">
                      {slide.skills?.map((skill, i) => (
                        <div key={i}>
                          <div className="flex justify-between mb-2 text-xs font-black uppercase tracking-widest">
                            <span>{skill.name}</span>
                            <span>{skill.level}%</span>
                          </div>
                          <div className={`h-3 w-full rounded-full overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-200'}`}>
                            <div 
                              className={`h-full ${skill.color} transition-all duration-1000 ease-out`}
                              style={{ width: currentSlide === index ? `${skill.level}%` : '0%' }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

           {slide.type === "info" && (
  <div className="w-full h-full flex flex-col justify-center overflow-y-auto custom-scrollbar py-10 md:py-0">
    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 shrink-0">{slide.title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center overflow-visible">
      {slide.items?.map((item, i) => (
        <div key={i} className={`p-6 md:p-8 rounded-3xl border transition-all ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100 shadow-sm'}`}>
          <div className="text-3xl md:text-4xl text-blue-600 mb-3 flex justify-center">{item.icon}</div>
          <h3 className="font-bold text-lg md:text-xl mb-2">{item.title}</h3>
          <p className="text-xs md:text-sm opacity-60 leading-relaxed">{item.text}</p>
        </div>
      ))}
    </div>
  </div>
)}

              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-12">
          <button onClick={prevSlide} className="p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 active:scale-90 transition-all">
            <FaChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div key={i} className={`h-2 rounded-full transition-all duration-300 ${currentSlide === i ? 'w-8 bg-blue-600' : 'w-2 bg-gray-500'}`}></div>
            ))}
          </div>

          <button onClick={nextSlide} className="p-4 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 active:scale-90 transition-all">
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
      <p className="mt-8 text-sm opacity-40 font-mono uppercase tracking-widest">Slide {currentSlide + 1} of {slides.length}</p>
       <button onClick={()=> navigate('/growthtimeline')} className=' cursor-pointer mt-5 py-4 flex px-2 items-center mx-auto  bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg '>Skill Growth Chart</button>
    </div>
    
   </>
  )
}

export default AboutInformationCards
