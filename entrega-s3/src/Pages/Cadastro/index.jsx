import {StyleCadastro} from "./StyleCadastro"

export const Cadastro = () => {

    return(

        <StyleCadastro>

            
            <div>
                <h1>Kenzie Hub</h1>
                <a href="">Voltar</a>
            </div>


            <form>
                <h2>Cadastro</h2>

                <label  htmlFor="Nome">Nome</label>
                <input placeholder="Digite seu Nome" id="Nome" type="text" />

                <label htmlFor="Email">Email</label>
                <input placeholder="Digite sua Email" id="Email" type="text" />

                <label htmlFor="Senha">Senha</label>
                <input placeholder="Digite sua Senha" id="Senha" type="text" />
              
                <label htmlFor="Senha">Confirmar Senha</label>
                <input placeholder="Digite novamente sua Senha" id="Senha" type="text" />

                
                <label htmlFor="Bio">Bio</label>
                <input placeholder="Fale sibre você" id="Bio" type="text" />

                
                <label htmlFor="Contato">Contato</label>
                <input placeholder="Opção de contato" id="Contato" type="text" />

                <label htmlFor="Modulo">Módulo</label>
                <input placeholder="Selecionar módulo" id="Modulo" type="text" />

                <button>Entrar</button>

                <span>Ainda não possui uma conta?</span>

                <a href="/cadastro">Cadastre-se</a>
            </form>
            
        </StyleCadastro>
        
    )

}