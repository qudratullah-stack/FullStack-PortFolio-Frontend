import { createContext } from "react";
import {type  contextTypes } from "../type/ContextTypes";
const MyContext = createContext<contextTypes>({
    darkMode: false,
    setDarkMode : ()=>{},
    alert: false,
    setAlert: ()=>{},
    success:'',
    setSuccess: ()=>{},
    setloader: ()=>{},
    loader: false
})
export default MyContext