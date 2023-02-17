import  {StyledModalCadastro}  from "./ModalCadastroStyle"
import { ModalAddTechContext } from "/src/Contexts/ModalAddTech/ModalAddTech.jsx"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { api } from "../../API"
import { RenderTechsContexto } from "../../Contexts/RenderTechsContexto/RenderTechsContextos"






export const ModalCadastroTech = () => {


    const { renderModalCreation } = useContext(ModalAddTechContext)

     const { setAtualizaTec , tachUser } = useContext(RenderTechsContexto)

    const token = localStorage.getItem("@token")


    const formSchema = yup.object().shape({

        title: yup.string().required("campo obrigatório"),
        status: yup.string().required("campo obrigatório"),

    })

    const {register , handleSubmit , formState: {errors}} = useForm({

        resolver: yupResolver(formSchema)

    })

    const SendsDate = async (data) => {

        try{

          const newTech = await api.post("/users/techs", data , {
            
                headers: {
                    Authorization: `Bearer ${token}`
                }

                })  

                setAtualizaTec( true )
               

        }catch(errors) {

            console.error(errors.message)
                setAtualizaTec( true )
                
        }
    }

    return(

        <StyledModalCadastro>
            <div>
                <div>
                    <h3>Cadastrar Tecnologia</h3>
                    <button onClick={renderModalCreation}>x</button>
                </div>

                <form action="" onSubmit={ handleSubmit(SendsDate)}>
                    <label htmlFor="name">Nome</label>
                    <input id="name" placeholder="tecnologia" type="text" {...register("title")}/>
                    <span>{errors.title && errors.title.message}</span>

                    <label htmlFor="status">Selecionar status</label>
                    <select name="status" id="status" {...register("status")}>
                        <option value="Iniciante">Iniciante</option>
                        <option value="Intermediário">Intermediário</option>
                        <option value="Avançado">Avançado</option>
                    </select>
                    <span>{errors.name && errors.name.message}</span>
                    <button type="subimit">Cadastrar Tecnologia</button>
                </form>
            </div>
        </StyledModalCadastro>

    )

}