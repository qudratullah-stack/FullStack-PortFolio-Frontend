import axios from "axios";
import MyContext from "../../../context/CreateContext";
import Alert from "../Alert";
import { type skillType } from "../../../type/ArrayType";
import Loading from "../Loading";
import {
  useContext,
  type Dispatch,
  type SetStateAction,
  useState,
  useEffect,
} from "react";

function GrowthData({
  show,
  setShow,
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) {
  const { darkMode, setAlert, alert, success, setSuccess, loader, setloader } = useContext(MyContext);

  const [year, setYear] = useState<string>('');
  const [Skill, setSkill] = useState<skillType[]>([]);
  const [skillName, setSkillName] = useState("");
  const [highlights, sethighlights] = useState('');
  const [percantage, setPercantage] = useState<number>();
  const [getdata, setGetData] = useState<any[]>([])
  const [openId, setOpenId] = useState<string | null>(null);
  const [boxOpen, setBoxOpen] = useState(false)
  const handleSavedMore = () => {
    if (!skillName || percantage === undefined) return
    setSkill([...Skill, { name: skillName, percentage: percantage }]);
    setSkillName('')
    setPercantage(undefined)
  };
  const SaveGrowthData = async () => {
    try {
      setloader(true)
      const token = localStorage.getItem('token')
      await axios.post('https://fullstack-portfolio-api-production.up.railway.app/admin/upsertGrowthData', {
          headers:{
        Authorization:`Bearer ${token}`
      },
        skill: Skill,
        year: year,
        highlights: highlights,
      })
      setAlert(true)
      setSuccess('Data Saved Successfully')
    } catch (err) {
      setAlert(true)
      setSuccess('Data Not Saved')
    } finally {
      setloader(false)
    }
  }
  const handleSaveGrowth = async () => {
    setloader(true)
    await SaveGrowthData()
    setYear('')
    setSkillName('')
    setPercantage(undefined)
    setSkill([])
    sethighlights('')
    setloader(false)

  }
  const getGrowthData = async () => {
    try {
     
      const res = await axios.get('https://fullstack-portfolio-api-production.up.railway.app/admin/getGrowthdata')
      setGetData(res.data.getresponse)
    } catch (err) {
      setAlert(true)
      setSuccess('Network error')
    }
  }
  useEffect(() => {
    getGrowthData()
  }, [])
  const deletegrowth = async(id:string)=>{
    try{
      setloader(true)
      const token = localStorage.getItem('token')
      await axios.delete(`https://fullstack-portfolio-api-production.up.railway.app/admin/deleteGrowthdata/${id}`,{
          headers:{
        Authorization:`Bearer ${token}`
      }
      })
      setGetData(prev => prev.filter(item => item._id !== id))
      setAlert(true)
      setSuccess('One Growth Year Data is Deleted Successfully')
    }catch(err){
      setAlert(true)
      setSuccess('Growth Data is Not Deleted')
    }
  }
  const tableContainerStyle = `fixed  top-0 overflow-auto right-0 px-8 h-full w-[300px] xl:w-[500px]  md:w-[450px] shadow-2xl z-50 transition-transform duration-500 ease-in-out ${show ? "translate-x-0" : "translate-x-full"
    } ${darkMode ? "bg-gray-800 border-l border-gray-700" : "bg-white border-l border-gray-200"}`;
  const inputStyle = `w-full mt-4 p-3 rounded-lg border outline-none transition-all duration-300 
  ${darkMode
      ? "bg-gray-800 border-gray-700 text-white focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
      : "bg-gray-50 border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
    }`;
  return (
    <>
      {alert && <Alert message={success} darkMode={darkMode} />}
      <div className={tableContainerStyle}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-gray-500/20 flex justify-between items-center">
            <h3
              className={`font-bold ${darkMode ? "text-white" : "text-black"} text-xl`}
            >
              Add GrowthData
            </h3>
            <button
              onClick={() => setShow(false)}
              className="text-red-500 hover:scale-110"
            >
              ✕
            </button>
          </div>
          <input
            type="text"
            className={inputStyle}
            value={year ?? ''}
            onChange={(e) => setYear(String(e.target.value))}
            placeholder="Inter Year"
          />
          <input
            type="text"
            className={inputStyle}
            value={highlights}
            onChange={(e) => sethighlights(e.target.value)}
            placeholder="Highlights"
          />
          <div className="mt-8 p-4 rounded-xl border border-dashed border-gray-500">
            <input
              type="text"
              className={inputStyle}
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
              placeholder="Skill Name"
            />
            <input
              type="number"
              className={inputStyle}
              value={percantage ?? ''}
              onChange={(e) => setPercantage(Number(e.target.value))}
              placeholder="Inter Parcentage"
            />
            <button disabled={!skillName || percantage === undefined} className="border-cyan-300 p-2 my-2 hover:bg-cyan-700 cursor-pointer hover:text-white bg-cyan-600 rounded-4xl" onClick={handleSavedMore}>Add More</button>
          </div>
          <button
            onClick={handleSaveGrowth}
            className="mt-8 w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-transform active:scale-95 shadow-lg shadow-cyan-500/20"
          >
            {loader ? <Loading /> : "Upload GrowthData"}
          </button>
        </div>
      
      {/* Get Data */}
    {getdata.map((e) => (
  <div
    key={e._id}
    className={`mt-4 overflow-hidden transition-all duration-300 border ${
      darkMode 
        ? "bg-gray-800/40 border-gray-700 shadow-xl" 
        : "bg-white border-gray-200 shadow-md"
    } rounded-2xl`}
  >
    {/* Selector / Header */}
    <button
      onClick={() => {
        setOpenId(openId === e._id ? null : e._id);
        setBoxOpen(false);
      }}
      className={`w-full p-5 flex justify-between items-center transition-colors ${
        openId === e._id ? (darkMode ? "bg-gray-700/50" : "bg-cyan-50/50") : ""
      }`}
    >
      <div className="flex items-center gap-4">
        <div className={`h-10 w-10 rounded-lg flex items-center justify-center font-bold ${
          darkMode ? "bg-cyan-900/30 text-cyan-400" : "bg-cyan-100 text-cyan-600"
        }`}>
          {e.year.toString().slice(-2)}
        </div>
        <span className={`font-bold text-lg ${darkMode ? "text-white" : "text-gray-800"}`}>
          Year {e.year} Performance 
        </span>
      </div>
      <span className={openId === e._id ? "text-cyan-500" : "text-gray-400"}>
        {openId === e._id ? "▲" : "▼"}
      </span>
    </button>

    {/* Detail (only when selected) */}
    {openId === e._id && (
      <div className={`p-5 pt-0 animate-in fade-in slide-in-from-top-2 duration-300`}>
        <div className={`mt-2 p-4 rounded-xl italic text-sm border-l-4 border-cyan-500 ${
          darkMode ? "bg-gray-900/50 text-gray-300" : "bg-gray-50 text-gray-600"
        }`}>
          <span>{e._id}</span>
          {e.highlights}
        </div>

        {/* Skills Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {e.skill.map((item:{_id:string; name: string, percentage:number}) => (
            <div key={item._id} className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className={darkMode ? "text-gray-400" : "text-gray-500"}>{item.name}</span>
                <span className="text-cyan-500">{item.percentage}%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan-500 rounded-full transition-all duration-1000"
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Delete Action Section */}
        <div className="mt-8 flex justify-end border-t border-gray-500/10 pt-4">
          {!boxOpen ? (
            <button 
              onClick={() => setBoxOpen(true)}
              className="px-4 py-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg text-sm font-bold transition-all flex items-center gap-2"
            >
              🗑️ Delete
            </button>
          ) : (
            <div className={`w-full p-4 rounded-xl border-2 border-dashed flex flex-col items-center gap-3 animate-in zoom-in-95 duration-200 ${
              darkMode ? "bg-red-900/20 border-red-900/40" : "bg-red-50 border-red-200"
            }`}>
              <p className={`text-sm font-bold text-center ${darkMode ? "text-red-300" : "text-red-700"}`}>
               Are you sure you want to delete this project? This action cannot be undone.
              </p>
              <div className="flex gap-2 w-full max-w-xs">
                <button
                  onClick={() => {
                    deletegrowth(e._id)
                  }}
                  className="flex-1 py-2 bg-red-500 text-white rounded-lg font-bold hover:bg-red-600 transition-all shadow-lg shadow-red-500/20"
                >
                  {loader ? <Loading/> : "Delete"}
                </button>
                <button
                  onClick={() => setBoxOpen(false)}
                  className={`flex-1 py-2 rounded-lg font-bold ${
                    darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-700 border border-gray-200"
                  }`}
                >
                  Cancle
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    )}
  </div>
))}
</div>

    </>
  );
}

export default GrowthData;