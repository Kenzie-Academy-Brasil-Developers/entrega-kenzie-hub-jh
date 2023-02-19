import  {StyledModalCadastro}  from "./ModalCadastroStyle"
import { ModalAddTechContext } from "/src/Contexts/ModalAddTech/ModalAddTech.jsx"
import { useContext } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import { api } from "../../API"
import { RenderTechsContexto } from "../../Contexts/RenderTechsContexto/RenderTechsContextos"
import { toast } from "react-toastify"
import { Button } from "../Button"





export const ModalCadastroTech = () => {


    const { renderModalCreation } = useContext(ModalAddTechContext)

     const { setAtualizaTec } = useContext(RenderTechsContexto)

    const token = localStorage.getItem("@token")


    const formSchema = yup.object().shape({

        title: yup.string().required("campo obrigatório"),
        status: yup.string().required("campo obrigatório"),

    })

    const {register , handleSubmit , formState: {errors}} = useForm({

        resolver: yupResolver(formSchema)

    })

    const enviarDataTech = async (data) => {

        try{

          await api.post("/users/techs", data , {
            
                    headers: {
                        Authorization: `Bearer ${token}`
                    }

                })

                setAtualizaTec( true )
                renderModalCreation()
                toast.success("Cadastrado com sucesso" , {autoClose: 2000 , theme:"dark" } )   

        }catch(errors) {

            console.error(errors.message)
            setAtualizaTec( true )
            toast.error("Nome já cadastrado!" ,  {autoClose: 2000 , theme:"dark" } ) 
                
        }
    }

    return(

        <StyledModalCadastro>
            <div>
                <div>
                    <h3>Cadastrar Tecnologia</h3>       
                    <Button type="button" text="X" funcion={renderModalCreation}/>
                </div>

                <form action="" onSubmit={ handleSubmit(enviarDataTech)}>
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
                    <Button type={"submit"} text="Cadastrar Tecnologia" />
                </form>
            </div>
        </StyledModalCadastro>

    )

}