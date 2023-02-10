import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup" 
import {StyleLogin} from "./StyleLogin"
import { useEffect } from "react"
import { api } from "../../API"
import { useNavigate } from "react-router-dom"

export const Login = () => {

    const navigate = useNavigate()

    const formShecma = yup.object().shape({

        email: yup.string().required("Digite seu e-mail").email("Digite um E-mail válido"),
        password: yup.string()
        .matches(/[a-z]/ , "Deve conter uma letra minuscula")
        .matches(/\d/ , "Deve conter ao menos 1 numero" )
        .matches(/[A-Z]/ , "Deve conter ao menos uma letra maiuscula")
        .matches(/\W|_/ , "Deve conter no minimo caracter especial")
        .matches(/.{8,}/ , "Deve conter no minimo 8 caracters")
        .required("Digite sua senha")

    })

    const {register , handleSubmit , formState:{errors}} = useForm( {

        resolver: yupResolver(formShecma)

    } )

    const onSubmitLogin = async (data) => {

        try{
   
           const userDados =  await api.post("/sessions" , data)
           console.log(userDados)
           localStorage.setItem("@userLogin" , JSON.stringify(userDados.data))
           navigate("/DashBoard")

        }catch (error) {

            console.error(error.message)
        }

    }
    
    return(

        <StyleLogin>

            <h1>Kenzie Hub</h1>

            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <h2>Login</h2>

                <label htmlFor="Email">Email</label>
                <input {...register("email")} placeholder="Digite seu Email" id="Email" type="text" />
                <span className="imputError">{errors.email?.message}</span>

                <label htmlFor="Senha">Senha</label>
                <input {...register("password")} placeholder="Digite sua senha" id="Senha" type="password" />
                <span className="imputError">{errors.senha?.message}</span>

                <button>Entrar</button>

                <span>Ainda não possui uma conta?</span>

                <Link to={"/cadastro"}>Cadastre-se</Link>
            </form>
            
        </StyleLogin>
        
    )

}