import { createContext } from "react";
import { api } from "../../API"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({})

export const UserContextProvider = ({children}) => {

    const navigate = useNavigate()


    const onSubmitLogin = async (data) => {

        try{
   
           const userDados =  await api.post("/sessions" , data)
           
           localStorage.setItem("@token" , userDados.data.token)
           localStorage.setItem("@user" , JSON.stringify(userDados.data.user))
           localStorage.setItem("@techs" , JSON.stringify(userDados.data.user.techs))
           
           toast.success("Login realizado com sucesso." , {autoClose: 2000 , theme:"dark" })
           navigate("/DashBoard")

        }catch (error) {

            console.error(error.message)
            toast.error("Email ou senha Inválidos" , {autoClose: 2000})

        }
    }


    const cadastro = async ({senhaComfirm, ...Data}) => {

        try{
    
         await api.post("/users" , Data)
 
         toast.success("Cadastrado com sucesso" , {autoClose: 2000 , theme:"dark" } )
         navigate("/")
 
        }catch (error) {
 
         console.log(error)
         toast.error(error.message , {autoClose: 2000 , theme:"dark" } )
        
        }
        
     }


          
    return(

        <UserContext.Provider value={{ onSubmitLogin , cadastro }}>

                {children}

        </UserContext.Provider>

    )

}