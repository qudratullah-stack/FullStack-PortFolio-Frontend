import {type Dispatch, type SetStateAction } from "react"
export interface contextTypes{
    darkMode: boolean
    setDarkMode: Dispatch<SetStateAction<boolean>>,
    alert: boolean,
    setAlert: Dispatch<SetStateAction<boolean>>,
    success: string
    setSuccess: Dispatch<SetStateAction<string>>,
    loader:boolean, 
    setloader: Dispatch<SetStateAction<boolean>> ,
    projectData: any[],
    contactName : string, 
    setContactName: Dispatch<SetStateAction<string>>
    contactEmail: string,
     setContactEmail:  Dispatch<SetStateAction<string>>
     contactMessage : string, 
     setContactMessage:  Dispatch<SetStateAction<string>>
     contactUs: ()=> Promise<void>
     isServiceOpen : boolean , 
     setisServiceOpen:  Dispatch<SetStateAction<boolean>>
     showTable: boolean, 
     setShowTable: Dispatch<SetStateAction<boolean>>
     setProjectData: Dispatch<SetStateAction<any[]>>
     removeProject: (id: string) => void
}