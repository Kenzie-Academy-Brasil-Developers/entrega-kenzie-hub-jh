import { useContext } from "react"
import  { ModalAtualizaExcluirContext } from "../../Contexts/ModalEditaExluir/ModalEditaExluir"

export const ListTach = ({tach}) => {

    const {functionDeRenderizarModal ,RenderModalAtualizaExcluir , setRenderModalAtualizaExcluir } = useContext(ModalAtualizaExcluirContext)

    return(

        <li>

            <h1> {tach.title} </h1>
            <div>
              <span> {tach.status}</span>
              <button onClick={ () => {functionDeRenderizarModal(tach)}}>X</button>
            </div>
           
        </li>

    )

}