import {type Dispatch, type SetStateAction } from "react"
export interface contextTypes{
    darkMode: boolean
    setDarkMode: Dispatch<SetStateAction<boolean>>
}