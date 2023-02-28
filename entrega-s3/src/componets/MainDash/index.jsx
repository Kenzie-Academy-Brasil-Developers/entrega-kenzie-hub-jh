import { StyledMainDash } from "./MainDashStyled"
import { useEffect , useContext} from "react"
import { TechContext } from "../../Contexts/TechContext/TechContext"
import { ListTach } from "../ListTachs"
import { Button } from "../Button"
 
 

export const MainDash = () => {

   
   const { setAtualizaTec , tachUser , renderModalCreation} = useContext(TechContext)

   useEffect(()=> {

      setAtualizaTec(true)

   }, [])

   return(

      <StyledMainDash>

         <div>
            <h3>Tecnologias</h3>
            <Button funcion={renderModalCreation} text="+" />
         </div>

         <ul>
           { tachUser.length != 0 ? tachUser.map((tach) => <ListTach key={tach.id} tach={tach}/>) 
           : <h1>Adicione uma tech</h1>
           }
         </ul>
         
      </StyledMainDash>

   )


}