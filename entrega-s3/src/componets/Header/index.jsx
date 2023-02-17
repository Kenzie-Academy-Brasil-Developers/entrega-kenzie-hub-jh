import { HeaderStyle } from "./HeaderStyle"
import { useContext } from "react"
import { RenderTechsContexto } from "../../Contexts/RenderTechsContexto/RenderTechsContextos.jsx"



export const Header = ({setUser}) => {

    // const {userLocalStorage , setUserLocalStorage , tachUser , setTachUser , teste , token} = useContext(RenderTechsContexto)

    const logout = ( ) => {

        localStorage.clear()
       
        setUser(false)

    }

    return(

        <HeaderStyle>
            <div>
                <h1>Kenzie Hub</h1>
                <button onClick={logout}>Sair</button>
            </div>

        </HeaderStyle>

    )


}