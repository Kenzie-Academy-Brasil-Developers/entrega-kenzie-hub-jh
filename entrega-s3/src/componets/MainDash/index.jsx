import { StyledMainDash } from "./MainDashStyled"
import { useState , useEffect , useContext} from "react"
import { ModalAddTechContext } from "/src/Contexts/ModalAddTech/ModalAddTech.jsx"
import { RenderTechsContexto } from "../../Contexts/RenderTechsContexto/RenderTechsContextos"
import { ListTach } from "../ListTachs"
import { Button } from "../Button"
 
 

export const MainDash = () => {

   const { renderModalCreation } = useContext(ModalAddTechContext)
   const { setAtualizaTec , tachUser} = useContext(RenderTechsContexto)

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