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
    setProjectData:  Dispatch<SetStateAction<any[]>>
    projectData: any[]

}