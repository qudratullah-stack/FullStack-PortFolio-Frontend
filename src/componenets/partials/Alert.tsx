

function Alert({ message, darkMode }:{message: string, darkMode: boolean}) {
   return (
    <div className="fixed top-5 left-1/2 w-full md:w-100 lg:w-125 xl:w-125px -translate-x-1/2 z-10000 animate-in fade-in slide-in-from-top-5 duration-300">
      <div className={`flex items-center space-x-3 px-14 py-3 rounded-full border shadow-2xl backdrop-blur-md  ${
        darkMode 
          ? "bg-cyan-500 border-cyan-500/50 text-black shadow-cyan-900/20" 
          : "bg-gray-800 border-cyan-200 text-cyan-600 shadow-cyan-100 "
      }`}>
        <div className="w-4 h-4 bg-purple-600 rounded-full animate-pulse"></div>
        <span className="font-bold tracking-wide text-sm uppercase">{message}</span>
      </div>
    </div>
  );
}

export default Alert
