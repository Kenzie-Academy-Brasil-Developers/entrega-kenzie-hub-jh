import { useContext } from "react"
import  { ModalAtualizaExcluirContext } from "../../Contexts/ModalEditaExluir/ModalEditaExluir"

export const ListTach = ({tach}) => {

    const {functionDeRenderizarModal ,RenderModalAtualizaExcluir , setRenderModalAtualizaExcluir } = useContext(ModalAtualizaExcluirContext)

    return(

        <li onClick={ () => {functionDeRenderizarModal(tach)}} >

            <h1> {tach.title} </h1>
            <div>
              <span> {tach.status}</span>
            </div>
           
        </li>

    )

}