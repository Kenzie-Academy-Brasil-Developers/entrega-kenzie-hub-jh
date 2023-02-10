import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "/src/componets/Header"
import { UserImformation } from "../../componets/UserImformation"
import { MainDash } from "../../componets/MainDash"
export const DashBoard = () => {
    
       const [user , setUser] = useState(localStorage.getItem("@userLogin"))

  const navigate = useNavigate()

    useEffect(() => {

        if(!user){
            
            navigate("/") 
            
        }

        
        
            
    }, [user]) 

    return (
         <>
            <Header setUser={setUser}/>
            <UserImformation user={JSON.parse(user)} />          
            <MainDash />
        </>
    )

} 