import React, {useState} from "react"
import {createContext} from "react"

const LogContext = createContext()

export function LogContextProvider({children}) {
  const [text, setText] = useState("")

  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  )
}

export default LogContext
