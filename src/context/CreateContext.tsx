import { createContext } from "react";
import {type  contextTypes } from "../type/ContextTypes";
const MyContext = createContext<contextTypes>({
    darkMode: false,
    setDarkMode : ()=>{}
})
export default MyContext