import axios from "axios"
import MyContext from "./CreateContext"
import { useState, useEffect } from "react"

function ProviderContext({children}:{children:React.ReactNode}) {
    const [darkMode , setDarkMode] = useState(false)
    const [alert , setAlert] = useState(false)
    const [loader , setloader] = useState(false)
    const [isServiceOpen , setisServiceOpen] = useState(false)
    const [success, setSuccess] = useState('')
    const [projectData , setProjectData] = useState<any[]>([]) 
    const [contactName , setContactName] = useState('')
    const [contactEmail, setContactEmail] = useState('')
    const [contactMessage , setContactMessage] = useState('')
     const [showTable, setShowTable] = useState(false);
  const getpojectdata = async ()=>{
    try{

    const res = await axios.get(`${import.meta.env.VITE_BEACKEND_URL}/admin/get/data`)
       
    const newdata = res.data.getresponse
    setProjectData(newdata)
    }catch(err){
     
      setSuccess('Failed get data')
    }finally{
      setloader(false)
    }
  }
  const removeProject =  (id: string) =>{
    setProjectData(prev => prev.filter(item => item._id !==id))
  }
  useEffect(()=>{
    getpojectdata()
  },[])
  
    const contactUs = async()=>{
      try{
        setloader(true)
        await axios.post(`${import.meta.env.VITE_BEACKEND_URL}/contactus`,{
          name: contactName,
           email: contactEmail,
            message : contactMessage
        })
        setSuccess('Message Send Successfully')
      }catch(err){
       
        setSuccess("Message Can't Send ")
      }finally{
        setloader(false)
      }
    }
     useEffect(()=>{
  if(alert){
  const intervel =   setInterval(() => {
      setAlert(false)
    }, 8000);
    return ()=> clearInterval(intervel)}
   },[alert])
  return (
    <MyContext.Provider value={{darkMode ,removeProject,projectData, setDarkMode, alert, setAlert,loader,setloader, success, setSuccess, contactName, setContactName, contactEmail, setContactEmail , contactMessage, setContactMessage,contactUs, isServiceOpen , setisServiceOpen, showTable, setShowTable,setProjectData}}>

        {children}

    </MyContext.Provider>
  )
}

export default ProviderContext
