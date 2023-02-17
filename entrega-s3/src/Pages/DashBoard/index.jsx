import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "/src/componets/Header"
import { UserImformation } from "../../componets/UserImformation"
import { MainDash } from "../../componets/MainDash"
import { ModalAddTechContext } from "/src/Contexts/ModalAddTech/ModalAddTech.jsx"
import { ModalCadastroTech } from "../../componets/ModalCadastroTech"
import { ModalAtualizaExcluir } from "../../componets/ModalAtualizaExcluir/ModalEditaExluir"
import { ModalAtualizaExcluirContext } from "../../Contexts/ModalEditaExluir/ModalEditaExluir"

export const DashBoard = () => {
    

    const { modalCriationTech } = useContext(ModalAddTechContext)
    const { functionDeRenderizarModal ,RenderModalAtualizaExcluir , setRenderModalAtualizaExcluir  } = useContext(ModalAtualizaExcluirContext)

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