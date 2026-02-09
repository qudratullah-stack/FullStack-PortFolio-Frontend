import { createContext } from "react";
import { type contextTypes } from "../type/ContextTypes";
const MyContext = createContext<contextTypes>({
  darkMode: false,
  setDarkMode: () => {},
  alert: false,
  setAlert: () => {},
  success: "",
  setSuccess: () => {},
  setloader: () => {},
  loader: false,
  projectData: [],
  contactName: "",
  setContactName: () => {},
  contactEmail: "",
  setContactEmail: () => {},
  contactMessage: "",
  setContactMessage: () => {},
  contactUs: async ()=>{},
  isServiceOpen: false,
  setisServiceOpen: ()=>{},
   showTable: false, 
     setShowTable: ()=>{},
     setProjectData: ()=>{},
     removeProject: (id: string) => {}
});
export default MyContext;
