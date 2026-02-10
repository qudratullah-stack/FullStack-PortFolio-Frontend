import { useState, useEffect, useContext } from 'react';
import { LucideSearch, LucideX, LucideLoader2, LucideSparkles, LucideArrowRight } from 'lucide-react';
import axios from 'axios';
import MyContext from '../../../context/CreateContext';
import Alert from '../Alert';
function SearchInput() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { darkMode, setAlert, alert , setSuccess , success } = useContext(MyContext);
  const [limitIndex, setLimitIndex] = useState(0)

  const handleSearch = async (e?: React.FormEvent | string) => {
    if (e && typeof e !== 'string') e.preventDefault();
    if(limitIndex > 15){
        setAlert(true)
        setSuccess('You can only obtain website-related information here. The AI service is currently paused for 3 hours.')

        const expirydate = Date.now() + (3 * 60 * 60 * 1000)
        localStorage.setItem('ai_lock_until', expirydate.toString())
        return 
    }
    const queryToSend = typeof e === 'string' ? e : searchQuery;
    if (!queryToSend.trim()) return;
    setSearchQuery('')
    setIsLoading(true);
    setAiResponse(""); 
    
    try {
      const response = await axios.post('https://fullstack-portfolio-api-production.up.railway.app/search/ai-search', {
        query: queryToSend
      });

      if (response.data.success) {
        const answer = response.data.answer?.choices?.[0]?.message?.content || response.data.answer;
        setAiResponse(answer);
        const indexLimit = limitIndex + 1
        setLimitIndex(indexLimit)
        localStorage.setItem('ai_key',indexLimit.toString())
      }
    } catch (error) {
      setAiResponse("I apologize, but I'm having trouble connecting to my service. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(()=>{
    const locktime = localStorage.getItem('ai_lock_until')
    if(locktime){
        if(Date.now() <  parseInt(locktime))
            setLimitIndex(16)
    }else{
        localStorage.removeItem('ai_lock_until');
        localStorage.setItem('ai_key','0')
        setLimitIndex(0)
    }
  },[])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else {
      document.body.style.overflow = 'auto';
      setAiResponse("");
      setSearchQuery("");
    }
  }, [isOpen]);

  return (
    <>
      {alert && <Alert message={success} darkMode={darkMode} />}
      <button 
        onClick={() => setIsOpen(true)}
        className={`p-2 rounded-full transition-all duration-300 ${
          darkMode ? 'hover:bg-gray-800 text-white' : 'hover:bg-gray-100 text-gray-300'
        }`}
      >
        <LucideSearch size={25} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-9999 flex flex-col items-center justify-start pt-16 px-4 md:pt-24 backdrop-blur-2xl bg-black/70 animate-in fade-in duration-300">
        
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/20"
          >
            <LucideX size={24} />
          </button>

          <div className="w-full max-w-3xl transform animate-in slide-in-from-bottom-8 duration-500">
            {/* Search Input */}
            <form onSubmit={handleSearch} className={`relative mt-7 flex items-center p-2 rounded-3xl border-2 transition-all shadow-2xl ${
              darkMode ? 'bg-gray-900 border-gray-700 focus-within:border-blue-500' : 'bg-white border-gray-100 focus-within:border-blue-400'
            }`}>
              <div className="pl-4 text-blue-500">
                {isLoading ? <LucideLoader2 size={28} className="animate-spin" /> : <LucideSearch size={28} />}
              </div>
              <input 
                autoFocus
                type="text" 
                placeholder="Ask Qudrat's Assistant anything..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full p-4 md:text-2xl  font-medium outline-none bg-transparent ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}
              />
              {searchQuery && !isLoading && (
                <button type="submit" className="mr-2 p-2 bg-blue-600 text-white rounded-2xl hover:bg-blue-700">
                  <LucideArrowRight size={20} />
                </button>
              )}
            </form>

            {/* Response Box with SCROLL FIX */}
            {(isLoading || aiResponse) && (
              <div className={`mt-6 rounded-3xl border shadow-2xl overflow-hidden transition-all ${
                darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'
              }`}>
                {/* Header of Response Box */}
                <div className="flex items-center gap-2 p-4 px-8 border-b border-gray-500/10 text-blue-500 font-bold text-xs uppercase tracking-widest">
                  <LucideSparkles size={16} />
                  <span>QudratUllah Masoom</span>
                </div>
                
                <div className={`p-8 overflow-y-auto max-h-[50vh] custom-scrollbar ${
                  darkMode ? 'text-gray-100' : 'text-gray-800'
                }`}>
                  {isLoading ? (
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-500/20 rounded w-3/4 animate-pulse"></div>
                      <div className="h-4 bg-gray-500/20 rounded w-1/2 animate-pulse"></div>
                      <div className="h-4 bg-gray-500/20 rounded w-2/3 animate-pulse"></div>
                    </div>
                  ) : (
                    <div className="text-lg leading-relaxed whitespace-pre-wrap font-medium">
                      {aiResponse}
                    </div>
                  )}
                </div>
              </div>
            )}

            {!aiResponse && !isLoading && (
              <div className="mt-6 flex flex-wrap gap-2 justify-center opacity-80">
                {["Projects", "Skills", "Contact", "Growth"].map(tag => (
                  <button 
                 
                    key={tag}
                    onClick={() => {setSearchQuery(tag); handleSearch(tag);}}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      darkMode ? 'bg-gray-800 hover:bg-blue-600 text-white' : 'bg-gray-100 hover:bg-blue-500 hover:text-white'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Internal CSS for Custom Scrollbar */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </>
  );
}

export default SearchInput;