import MyContext from "./CreateContext"
import { useState } from "react"

function ProviderContext({children}:{children:React.ReactNode}) {
    const [darkMode , setDarkMode] = useState(false)
  return (
    <MyContext.Provider value={{darkMode , setDarkMode}}>

        {children}

    </MyContext.Provider>
  )
}

export default ProviderContext
