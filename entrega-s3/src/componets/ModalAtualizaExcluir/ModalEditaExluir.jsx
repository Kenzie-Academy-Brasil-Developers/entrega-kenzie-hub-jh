import  {ModalAtualizaExcluirStyled}  from "./ModalCadastroStyle.js"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {ModalAtualizaExcluirContext} from "../../Contexts/ModalEditaExluir/ModalEditaExluir"
import { useContext } from "react"
import { api } from "../../API"
import { RenderTechsContexto } from "../../Contexts/RenderTechsContexto/TechContext"
import { toast } from "react-toastify"
import { Button } from "../Button/index.jsx"


export const ModalAtualizaExcluir = () => {

    const  { functionDeRenderizarModal , RenderModalAtualizaExcluir } = useContext(ModalAtualizaExcluirContext)
    const {setAtualizaTec } = useContext(RenderTechsContexto)
    const token = localStorage.getItem("@token")

    const formSchema = yup.object().shape({

        title: yup.string().required("campo obrigatório"),
        status: yup.string().required("campo obrigatório"),

    })

    const {register , handleSubmit , formState: {errors}} = useForm({

        resolver: yupResolver(formSchema)

    })

    const atualizaTach = async ({...status}) => {

        try{

           const result = await api.put(`/users/techs/${RenderModalAtualizaExcluir.id}`, status, {
                headers: {
                    Authorization: `Bearer ${token}`
                } 
            })

            toast.success("Atualizado com sucesso" , {autoClose: 2000} )  
            setAtualizaTec(true)
            functionDeRenderizarModal(false)
            

        }catch(error) {

            console.error(error)

        }

    }

    const deletaTech = async () => {

        try{

            await api.delete(`/users/techs/${RenderModalAtualizaExcluir.id}` ,{
                headers: {
                    Authorization: `Bearer ${token}`
                }  
            })
            setAtualizaTec(true)
            functionDeRenderizarModal(false)
            toast.success("Exluido com sucesso" , {autoClose: 2000 , theme:"dark" } )   
        }catch(error){

            console.log(error)
            toast.success("Exluido com sucesso" , {autoClose: 2000 , theme:"dark" } )
            
        }

      

    }

    return(

        <ModalAtualizaExcluirStyled>
            <div>
                <div>
                    <h3>Tecnologia Detalhes</h3>
                    <button onClick={ () => {functionDeRenderizarModal(false)}}>x</button>
                </div>

                <form onSubmit={handleSubmit(atualizaTach)}>
                    <label  htmlFor="name">Nome do projeto</label>
                    <input id="name" value={RenderModalAtualizaExcluir.title} type="text" {...register("title")}/>
                    <span className="error">{errors.title && errors.title.message}</span>

                    <label htmlFor="status">status</label>
                    <select name="status" id="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <span>{errors.name && errors.name.message}</span>
                    <div>
                        <Button type="subimit"  text="Salvar alterações"/>
                        <Button type={"button"} text="Excluir"  funcion={deletaTech} />
                    </div>
                    
                </form>
            </div>
        </ModalAtualizaExcluirStyled>

    )

}