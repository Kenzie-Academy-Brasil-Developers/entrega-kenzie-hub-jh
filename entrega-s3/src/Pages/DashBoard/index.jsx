import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "/src/componets/Header"
import { UserImformation } from "../../componets/UserImformation"
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
            <UserImformation />

            
            <h1>Que pena! Estamos em desenvolvimento :(</h1>
            <p>Nossa aplicação está em desenvolvimento, em breve teremos novidades</p>
        </>
    )

} 