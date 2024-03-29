import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup" 
import { Link } from "react-router-dom"
import {StyleCadastro} from "./StyleCadastro"
import { UserContext } from "../../Contexts/UserContext/userContext"
import { useContext } from "react"

export const Cadastro = () => {

    const { cadastro } = useContext(UserContext)


    const formShecma = yup.object().shape({

        name: yup.string().required("Preencha este campo"),

        email: yup.string().required("Preencha este campo")
            .email("Digite um email válido"),
        password: yup.string()
            .required("Preencha este campo")
            .matches(/[a-z]/ , "Deve conter uma letra minuscula")
            .matches(/\d/ , "Deve conter ao menos 1 numero" )
            .matches(/[A-Z]/ , "Deve conter ao menos uma letra maiuscula")
            .matches(/\W|_/ , "Deve conter no minimo caracter especial")
            .matches(/.{8,}/ , "Deve conter no minimo 8 caracters"),
            
        senhaComfirm: yup.string()
            .required("Preencha este campo")
            .oneOf([yup.ref("password")] ,"Comfirmar senha deve ser igual senha"),

        bio: yup.string().required("Preencha este campo"),

        contact: yup.string().required("Preencha este campo"),

        course_module: yup.string().required("Selecione um modulo"),

    })

    const {register , handleSubmit , formState:{errors}} = useForm({

        resolver: yupResolver(formShecma)

    } )

  

    return(

        <StyleCadastro>

            <div>
                <h1>Kenzie Hub</h1>
                <Link to={"/"}>Voltar</Link>
            </div>

            <form onSubmit={handleSubmit(cadastro)}>
                <h2>Cadastro</h2>

                <span>Rapido e grátis, vamos nessa</span>

                <label  htmlFor="Nome">Nome</label>
                <input {...register("name")} placeholder="Digite seu Nome" id="Nome" type="text" />
                <span className="imputError">{errors.name?.message}</span>

                <label htmlFor="Email">Email</label>
                <input {...register("email")} placeholder="Digite sua Email" id="Email" type="text" />
                <span className="imputError">{errors.email?.message}</span>

                <label htmlFor="Senha">Senha</label>
                <input {...register("password")} placeholder="Digite sua Senha" id="Senha" type="password" />
                <span className="imputError"> {errors.password?.message} </span>

                <label htmlFor="Senha">Confirmar Senha</label>
                <input {...register("senhaComfirm")} placeholder="Digite novamente sua Senha" id="Senha" type="password" />
                <span className="imputError"> {errors.senhaComfirm?.message} </span>
                
                <label htmlFor="Bio">Bio</label>
                <input {...register("bio")} placeholder="Fale sobre você" id="Bio" type="text" />
                <span className="imputError">  {errors.bio?.message} </span>

                <label htmlFor="Contato">Contato</label>
                <input {...register("contact")} placeholder="Opção de contato" id="Contato" type="text" />
                <span className="imputError">  {errors.contact?.message} </span>

                <label htmlFor="Modulo">Módulo</label>
                <select {...register("course_module")} placeholder="Selecionar módulo" id="Modulo" type="text"> 
                    <option value="">Selecione um módulo</option>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
                <span className="imputError">  {errors.course_module?.message} </span>

                <button type="submit">Cadastrar</button>

            </form>
            
        </StyleCadastro>
        
    )

}