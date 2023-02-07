import {StyleLogin} from "./StyleLogin"

export const Login = () => {


    
    return(

        <StyleLogin>

            <h1>Kenzie Hub</h1>


            <form>
                <h2>Login</h2>

                <label  htmlFor="Email">Email</label>
                <input placeholder="Digite seu Email" id="Email" type="text" />

                <label htmlFor="Senha">Senha</label>
                <input placeholder="Digite sua senha" id="Senha" type="text" />

                <button>Entrar</button>

                <span>Ainda não possui uma conta?</span>

                <a href="">Cadastre-se</a>
            </form>
            
        </StyleLogin>
        
    )

}