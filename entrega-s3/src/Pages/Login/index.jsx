import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup" 
import {StyleLogin} from "./StyleLogin"
import { useEffect } from "react"
import { api } from "../../API"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

export const Login = () => {

    const navigate = useNavigate()

    const formShecma = yup.object().shape({

        email: yup.string().required("Digite seu e-mail").email("Digite um E-mail válido"),

        password: yup.string().required("Digite sua senha")

    })

    const {register , handleSubmit , formState:{errors}} = useForm( {

        resolver: yupResolver(formShecma)

    } )

    const onSubmitLogin = async (data) => {

        try{
   
           const userDados =  await api.post("/sessions" , data)
           console.log(userDados)
           localStorage.setItem("@userLogin" , JSON.stringify(userDados.data))
           
           toast.success("Login realizado com sucesso." , {autoClose: 2000} )
           navigate("/DashBoard")

        }catch (error) {

            console.error(error.message)
            toast.error("Email ou senha Inválidos" , {autoClose: 2000})

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
                <span className="imputError">{errors.password?.message}</span>

                <button>Entrar</button>

                <span>Ainda não possui uma conta?</span>

                <Link to={"/cadastro"}>Cadastre-se</Link>
            </form>
            
        </StyleLogin>
        
    )

}