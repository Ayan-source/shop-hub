import React, { createContext, useState } from 'react'

const Authmode = createContext(null)
const AuthmodeProvider = ({children}) => {
    const [mode,setmode] = useState(true)
  return (
    <Authmode.Provider value={{mode,setmode}}>{children}</Authmode.Provider>
  )
}

export default AuthmodeProvider
export {Authmode}