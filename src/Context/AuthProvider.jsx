import React, { createContext, useState } from 'react'

const Authcontext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setuser] = useState(
        localStorage.getItem("current")? {email: JSON.parse(localStorage.getItem("current"))}:
            null
        
    )

    function signup(email,password){
        const users = JSON.parse(localStorage.getItem("users")) || []
        if(users.find(u=> u.email === email)) return {result:"fail", error:"Email already exist"}
        users.push({email:email, password:password})
        localStorage.setItem("users",JSON.stringify(users))
        setuser({email:email})
        localStorage.setItem("current",JSON.stringify(email))
        return {result : "success"}
    }

    function login(email,password){
        const users = JSON.parse(localStorage.getItem("users")) || []
        const user = users.find(u=> u.email === email && u.password === password)
        if(!user){
            return {result: "fail", error: "Invalid email or password"}
        }
        setuser({email:email})
        localStorage.setItem("current",JSON.stringify(email))
        return {result: "success"}
    }
    function logout(){
        localStorage.removeItem("current")
        setuser(null)
    }
  return (
    <Authcontext.Provider value={{user,signup,login,logout}}>{children}</Authcontext.Provider>
  )
}

export default AuthProvider
export { Authcontext }
