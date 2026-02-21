import  { useContext, useEffect, useState } from "react";
import axios from "axios";
import type { processedDataItem , GrowthDataType} from "../../type/ArrayType";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import MyContext from "../../context/CreateContext";

const GrowthTimeline = () => {
  const { darkMode } = useContext(MyContext);
  const [data, setData] = useState<processedDataItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BEACKEND_URL}/admin/getGrowthdata`);
        const rawData = res.data.getresponse || [];
        
        const grouped = rawData.reduce((item1:GrowthDataType , itemCurr: any) => {
          const year = itemCurr.year;
          if (!item1[year]) {
            item1[year] = { year, totalPercentage: 0, count: 0, skills: [], highlights: [] };
          }
          itemCurr.skill.forEach((s: {name: string, percentage: number}) => {
            item1[year].skills.push(s);
            item1[year].totalPercentage += s.percentage;
            item1[year].count += 1;
          });
          if (itemCurr.highlights) item1[year].highlights.push(...itemCurr.highlights);
          return item1;
        }, {});

        const processedData = Object.values(grouped).map((item: any) => ({
          year: item.year,
          average: Math.round(item.totalPercentage / item.count),
          skills: item.skills,
          highlights: item.highlights,
        })).sort((a, b) => a.year - b.year);

        setData(processedData);
      } catch (err) {
        console.error("Error fetching data", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const info = payload[0].payload;
      return (
        <div className={`p-4 rounded-2xl shadow-2xl border backdrop-blur-md ${darkMode ? 'bg-gray-900/90 border-blue-500/30 text-white' : 'bg-white/90 border-blue-200 text-gray-900'}`}>
          <p className="text-xl font-black text-blue-600 mb-2">{info.year}</p>
          <div className="space-y-2">
            <p className="text-xs font-bold uppercase opacity-50">Mastery Level: {info.average}%</p>
            <div className="flex flex-wrap gap-1 max-w-50">
              {info.skills.map((s: any, i: number) => (
                <span key={i} className="px-2 py-0.5 bg-blue-600/10 text-blue-500 rounded text-[10px] font-bold border border-blue-600/20">
                  {s.name}
                </span>
              ))}
            </div>
            <div className="mt-3 pt-2 border-t border-gray-700/30">
              <p className="text-[10px] leading-tight opacity-80 italic">"{info.highlights[0]}"</p>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  if (loading) return <div className="h-96 flex items-center justify-center font-black animate-pulse text-blue-600">LOADING ANALYTICS...</div>;

  return (
    <div className={`w-full py-12 px-4 transition-all duration-500 ${darkMode ? 'bg-[#020617]' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className={`text-4xl md:text-6xl ${darkMode?'text-white':'text-black'} font-black tracking-tighter uppercase leading-none`}>
              Professional <br /> <span className="text-blue-600">Evolution</span>
            </h2>
            <p className="mt-4 opacity-50 font-bold uppercase tracking-widest text-xs">Skill Mastery & Roadmap Analysis (2024 - ++)</p>
          </div>
          <div className="hidden md:block text-right">
            <span className="text-5xl font-black text-blue-600/20 italic">#{data.length} STAGES</span>
          </div>
        </div>

        <div className={`p-6 md:p-10 rounded-[40px] border relative overflow-hidden ${darkMode ? 'bg-gray-900/50 border-gray-800 shadow-2xl' : 'bg-white border-gray-200 shadow-xl'}`}>
       
          <div className="h-100 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#1e293b" : "#e2e8f0"} />
                <XAxis 
                  dataKey="year" 
                  height={60}
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: darkMode ? '#64748b' : '#94a3b8', fontSize: 12, fontWeight: 'bold' }} 
                  dy={15}
                />
                <YAxis 
                  domain={[0, 100]} 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: darkMode ? '#64748b' : '#94a3b8', fontSize: 10 }} 
                />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#2563eb', strokeWidth: 2, strokeDasharray: '5 5' }} />
                <Area 
                  type="monotone" 
                  dataKey="average" 
                  stroke="#2563eb" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorPv)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-gray-800/30">
            {data.slice(-4).map((item, i) => (
              <div key={i} className="group cursor-help">
                <p className="text-[10px] font-black opacity-40 uppercase mb-1">{item.year} Peak</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-blue-600 group-hover:scale-110 transition-transform inline-block">{item.average}%</span>
                  <span className="text-[10px] font-bold opacity-60">Mastery</span>
                </div>
                <div className="h-1 w-full bg-gray-800 mt-2 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-600" style={{ width: `${item.average}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthTimeline;