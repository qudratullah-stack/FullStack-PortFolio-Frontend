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
      setloader(true)
    const res = await axios.get('http://localhost:9000/admin/get/data')
       
    const newdata = res.data.getresponse
    setProjectData(newdata)
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
  
    const contactUs = async()=>{
      try{
        setloader(true)
        await axios.post('http://localhost:9000/admin/contactus',{
          name: contactName,
           email: contactEmail,
            message : contactMessage
        })
        setAlert(true)
        setSuccess('Message Send Successfully')
      }catch(err){
        setAlert(true)
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
    <MyContext.Provider value={{darkMode ,projectData, setDarkMode, alert, setAlert,loader,setloader, success, setSuccess, contactName, setContactName, contactEmail, setContactEmail , contactMessage, setContactMessage,contactUs, isServiceOpen , setisServiceOpen, showTable, setShowTable}}>

        {children}

    </MyContext.Provider>
  )
}

export default ProviderContext
