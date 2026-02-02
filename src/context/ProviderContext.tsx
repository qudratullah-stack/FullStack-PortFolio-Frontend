import axios from "axios"
import MyContext from "./CreateContext"
import { useState, useEffect } from "react"

function ProviderContext({children}:{children:React.ReactNode}) {
    const [darkMode , setDarkMode] = useState(false)
    const [alert , setAlert] = useState(false)
    const [loader , setloader] = useState(false)
    const [success, setSuccess] = useState('')
    const [projectData , setProjectData] = useState<any[]>([]) 
  const getpojectdata = async ()=>{
    try{
      setloader(true)
    const res = await axios.get('http://localhost:9000/admin/get/data')
       
    const newdata = res.data.getresponse
    setProjectData(newdata)
    setAlert(true)
    setSuccess('Data Get Succeffully')
    }catch(err){
      setAlert(true)
      setSuccess('Failed get data')
    }finally{
      setloader(false)
    }
  }
  useEffect(()=>{
    getpojectdata()
  },[])
   useEffect(()=>{
  if(alert){
  const intervel =   setInterval(() => {
      setAlert(false)
    }, 4000);
    return ()=> clearInterval(intervel)}
   },[alert])
    
  return (
    <MyContext.Provider value={{darkMode ,projectData, setDarkMode, alert, setAlert,loader,setloader, success, setSuccess}}>

        {children}

    </MyContext.Provider>
  )
}

export default ProviderContext
