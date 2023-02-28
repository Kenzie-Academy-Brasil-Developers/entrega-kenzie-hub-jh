import { useContext } from "react"
import  { TechContext } from "../../Contexts/TechContext/TechContext"

export const ListTach = ({tach}) => {

    const {functionDeRenderizarModal ,RenderModalAtualizaExcluir , setRenderModalAtualizaExcluir } = useContext(TechContext)

    return(

        <li onClick={ () => {functionDeRenderizarModal(tach)}} >

            <h1> {tach.title} </h1>
            <div>
              <span> {tach.status}</span>
            </div>
           
        </li>

    )

}