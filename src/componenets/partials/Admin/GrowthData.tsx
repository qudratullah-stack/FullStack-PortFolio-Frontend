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
} from "react";

function GrowthData({
  show,
  setShow,
}: {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}) {
  const { darkMode, setAlert, alert, success, setSuccess, loader, setloader } = useContext(MyContext);

  const [year, setYear] = useState<number>();
  const [Skill, setSkill] = useState<skillType[]>([]);
  const [skillName, setSkillName] = useState("");
  const [highlights, sethighlights] = useState('');
  const [percantage, setPercantage] = useState<number>();
  const handleSavedMore = () => {
    if(!skillName || percantage === undefined)return
     setSkill([...Skill, { name: skillName, percentage: percantage }]);
    setSkillName('')
    setPercantage(undefined)
  };
  const GrowthData = async()=>{
    try{
        setloader(true)
        await axios.post('http://localhost:9000/admin/gorwthData',{
           skill: Skill ,
            year : year ,
            highlights: highlights,
             
          
        })
        setAlert(true)
        setSuccess('Data Saved Successfully')

        
    }catch(err){
        setAlert(true)
        setSuccess('Data Not Saved')
    }finally{
        setloader(false)
    }
  }
  const handleSaveGrowth = ()=>{
    GrowthData()
    setYear(2)
    setSkillName('')
    setPercantage(undefined)
            setSkill([])
        sethighlights('')
    
  }
  const tableContainerStyle = `fixed top-0 right-0 px-8 h-full w-[300px] xl:w-[500px]  md:w-[450px] shadow-2xl z-50 transition-transform duration-500 ease-in-out ${
    show ? "translate-x-0" : "translate-x-full"
  } ${darkMode ? "bg-gray-800 border-l border-gray-700" : "bg-white border-l border-gray-200"}`;
  const inputStyle = `w-full mt-4 p-3 rounded-lg border outline-none transition-all duration-300 
  ${
    darkMode
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
            type="number"
            className={inputStyle}
            value={year??''}
            onChange={(e) => setYear(Number(e.target.value))}
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
            value={percantage?? ''}
            onChange={(e) => setPercantage(Number(e.target.value))}
            placeholder="Inter Parcentage"
          />
          <button disabled={ !skillName || percantage === undefined} className="border-cyan-300 p-2 my-2 hover:bg-cyan-700 cursor-pointer hover:text-white bg-cyan-600 rounded-4xl" onClick={handleSavedMore}>Add More</button>
          </div>
          <button
            onClick={handleSaveGrowth}
            className="mt-8 w-full py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-transform active:scale-95 shadow-lg shadow-cyan-500/20"
          >
            {loader ? <Loading /> : "Upload Project to Cloud"}
          </button>
        </div>
      </div>
    </>
  );
}

export default GrowthData;
