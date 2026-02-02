

function Alert({ message, darkMode }:{message: string, darkMode: boolean}) {
   return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-100 animate-in fade-in slide-in-from-top-5 duration-300">
      <div className={`flex items-center space-x-3 px-6 py-3 rounded-full border shadow-2xl backdrop-blur-md ${
        darkMode 
          ? "bg-cyan-900/20 border-cyan-500/50 text-cyan-400 shadow-cyan-900/20" 
          : "bg-white border-cyan-200 text-cyan-600 shadow-cyan-100"
      }`}>
        <div className="w-2.5 h-2.5 bg-cyan-500 rounded-full animate-pulse"></div>
        <span className="font-bold tracking-wide text-sm uppercase">{message}</span>
      </div>
    </div>
  );
}

export default Alert
