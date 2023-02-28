import { useEffect } from "react";
import { createContext, useState } from "react";
import { api } from "../../API"

export const TechContext = createContext({})

export const TechContextProvider = ({children}) => {

    
    const [tachUser , setTachUser] = useState([])
    const [atualizarTech , setAtualizaTec] = useState(false)

    const token = localStorage.getItem("@token")   

            useEffect(() => {

            const ListTachs = async () => {
            
                try{

                    const dadosUser = await api.get(`/profile`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    } )
             
                    setTachUser([...dadosUser.data.techs])
       
                }catch (error) {

                    console.log(error)

                }
            }

            ListTachs()
            setAtualizaTec(false)

        },[atualizarTech])

        
          
    return(

        <TechContext.Provider value={{ setAtualizaTec , tachUser }}>

                {children}

        </TechContext.Provider>

    )

}