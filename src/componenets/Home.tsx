
import { homeArray } from "../type/ArrayType";
import { useState, useEffect, useContext } from "react";
import MyContext from "../context/CreateContext";
import { skillsData } from "./partials/Array";
import { services } from "./partials/Array";
import aboutImage from "../assets/homepagebg.jpeg";
import ContectForm from './partials/contact/ContectForm'
import Footer from "./partials/Footer";
import Services from "./partials/Services";
import ScrollTable from "./partials/ScrollTable";
function Home() {
 
  const { darkMode,  isServiceOpen ,  setShowTable } = useContext(MyContext);
  const [arrayLength, setArrayLength] = useState(0);
 
  useEffect(() => {
    const intervel = setInterval(() => {
      setArrayLength((prev) => (prev + 1) % homeArray.length);
    }, 4500);
    return () => clearInterval(intervel);
  }, []);

  
  return (
    <>

      <div className="bg-[url(../assets/homepagebg.jpeg)] h-auto bg-cover relative bg-center">
        <div
          className={`${darkMode ? "bg-gray-900/95" : "bg-gray-900/90"} h-auto pb-4`}
        >
          <div className="h1-array-parent w-full p-5 h-auto py-20 flex flex-col justify-center items-center">
            <h1 className="font-bold text-2xl my-7 text-cyan-400 px-4 md:text-4xl lg:text-5xl xl:text-6xl items-center flex text-center">
              Welcome to QudratMasoom
            </h1>

            <div className="arraycontainer text-3xl font-semibold flex flex-wrap text-white h-12">
              <span
                key={arrayLength}
                className="typewriter text-2xl md:text-3xl lg:text-4xl xl:text-5xl h-auto pb-2 "
                style={{
                  //@ts-ignore
                  "--chars": homeArray[arrayLength].text.length,
                }}
              >
                {" "}
                {homeArray[arrayLength].text}{" "}
              </span>
            </div>
            <p className="mt-8 text-lg p-7 md:text-xl lg:text-3xl text-slate-200 max-w-3xl mx-auto leading-relaxed font-normal antialiased">
              A{" "}
              <span className="text-cyan-400 font-medium">
                Full-Stack MERN Specialist
              </span>{" "}
              dedicated to building high-performance web applications. I bridge
              the gap between complex backend logic and intuitive user
              experiences to create{" "}
              <span className="text-white font-bold  border-b-2 border-cyan-500/30">
                scalable solutions
              </span>{" "}
              that drive real-world results.
            </p>
            <button
              className="my-auto w-50 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg "
              onClick={() => {
                setShowTable(true);
              }}
            >
              📋 View Projects
            </button>
          <ScrollTable/>
          </div>
        </div>
      </div>
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl font-bold text-center mb-12 ${darkMode ? "text-white" : "text-black"}`}
          >
            What I Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`${darkMode ? "bg-gray-900 border border-gray-800" : "bg-white border-white"} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover opacity-80"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">
                    {service.title}
                  </h3>
                  <p
                    className={`${darkMode ? "text-gray-400" : "text-black"} leading-relaxed`}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-6 bg-transparent">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-400 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img
                src={aboutImage} 
                alt="Qudrat Masoom"
                className="relative w-64 h-64 object-cover rounded-full border-2 border-gray-800 shadow-2xl"
              />
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h2
              className={`text-4xl font-bold ${darkMode ? "text-white" : "text-black"} mb-6`}
            >
              About <span className="text-blue-500">Me</span>
            </h2>

            <p
              className={`${darkMode ? "text-gray-300" : "text-black"} text-lg leading-relaxed mb-6`}
            >
              I am a{" "}
              <span className="text-blue-400 font-semibold">
                Full-Stack MERN Developer
              </span>{" "}
              currently pursuing my{" "}
              <span className="text-blue-400">BS in Computer Science</span> from
              AIOU. My journey in coding started with a curiosity about how the
              web works, which evolved into a passion for building scalable and
              user-centric applications.
            </p>

            <p
              className={`${darkMode ? "text-gray-400" : "text-black"} leading-relaxed mb-8`}
            >
              I specialize in bridging the gap between complex backend logic and
              intuitive frontend experiences. I don't just write code; I solve
              problems and ensure that every project I deploy is optimized for
              performance and security.
            </p>

            <div className="grid grid-cols-1 gap-4 ">
              <div className="bg-gray-900/50 p-4 rounded-xl w-full border border-gray-800">
                <h4 className="text-blue-400 font-bold">Location</h4>
                <p
                  className={`${darkMode ? "text-gray-400" : "text-black"} text-sm`}
                >
                  Pakistan (Remote Available)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`flex flex-wrap justify-around gap-8 py-7 border-y ${darkMode ? "border-gray-700" : "border-gray-300"}  my-5`}
      >
        <div className="text-center">
          <h3 className="text-3xl font-bold text-cyan-600">10+</h3>
          <p className="text-gray-500 text-sm">Projects Completed</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-cyan-600">15+</h3>
          <p className="text-gray-500 text-sm">Tech Stack Icons</p>
        </div>
        <div className="text-center">
          <h3 className="text-3xl font-bold text-cyan-600">100%</h3>
          <p className="text-gray-500 text-sm">Open to Remote Work</p>
        </div>
      </div>
       <section className={`py-16 px-4 ${darkMode ? "#111827" : ""} text-white`}>
        <div className="max-w-6xl mx-auto">
          <h2
            className={`text-3xl font-bold ${darkMode ? "text-white" : "text-black"} text-center mb-12`}
          >
            Technical Arsenal
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className={`group relative flex flex-col items-center p-6 ${darkMode ? "bg-slate-800 hover:bg-slate-700  text-white" : "bg-white text-black hover:bg-slate-100 hover:-tran"} rounded-xl transition-all slate-y-2 cursor-pointer`}
              >
                <div className="text-5xl mb-4 transition-transform group-hover:scale-110">
                  {skill.icon}
                </div>
                <span className="font-medium text-sm tracking-wide">
                  {skill.name}
                </span>

                <div className="absolute bottom-full mb-4 w-48 p-3 bg-white text-slate-900 text-xs rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 text-center">
                  <div className="font-bold border-b mb-1 pb-1">
                    {skill.name} Expert
                  </div>
                  {skill.info}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {isServiceOpen && <Services/>}
        <hr
        className={`${darkMode ? "text-gray-600" : "text-gray-300"} w-[70%] mx-auto`}/>
        <div className="flex flex-col lg:flex-row p-5 lg:p-11 gap-14 w-full">
      <ContectForm/>
      <div className={` flex-1  p-6 ${darkMode?'bg-gray-900 border-gray-800':'bg-white border-gray-400'} border  rounded-2xl flex flex-col justify-center space-y-6`}>
  <div>
    <p className="text-cyan-600 text-xs uppercase tracking-widest mb-2">Location</p>
    <h3 className={`${darkMode?'text-white': 'text-black'} text-xl font-medium flex items-center`}>
      <span className="mr-2">📍</span> Lahore, Pakistan
    </h3>
  </div>
  <div className="p-4 bg-gray-800 rounded-xl border border-green-900/30">
    <div className="flex items-center space-x-3">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
      </span>
      <p className="text-green-400 font-medium tracking-wide">Available for Projects</p>
    </div>
    <p className="text-gray-400 text-xs mt-2 leading-relaxed">
      I'm currently open to freelance opportunities and full-time roles.
    </p>
  </div>
  <div>
    <p className="text-gray-500 text-xs uppercase tracking-widest mb-1">Local Time</p>
    <p className={`${darkMode?'text-white':'text-black'} font-mono`}>{new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} (GMT+5)</p>
  </div>
</div>

        </div>
        <Footer showtable = {setShowTable}/>

    </>
  );
}

export default Home;
