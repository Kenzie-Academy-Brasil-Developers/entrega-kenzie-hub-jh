import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "/src/componets/Header"
import { UserImformation } from "../../componets/UserImformation"
import { MainDash } from "../../componets/MainDash"
import { TechContext} from "../../Contexts/TechContext/TechContext"
import { ModalCadastroTech } from "../../componets/ModalCadastroTech"
import { ModalAtualizaExcluir } from "../../componets/ModalAtualizaExcluir/ModalEditaExluir"


export const DashBoard = () => {
    

    const { modalCriationTech } = useContext(TechContext)
    const { functionDeRenderizarModal ,RenderModalAtualizaExcluir , setRenderModalAtualizaExcluir  } = useContext(TechContext)

    const [user , setUser] = useState(JSON.parse(localStorage.getItem("@user")))

    const navigate = useNavigate()
     
 
    useEffect(() => {
    
        if(!user){  

             navigate("/")
        }
        
    }, [user]) 

    return (
        <>
            <Header setUser={setUser}/>
            <UserImformation user={user} />          
            <MainDash />
            {modalCriationTech && <ModalCadastroTech />}
            { RenderModalAtualizaExcluir && <ModalAtualizaExcluir />}
        </>
    )

} 