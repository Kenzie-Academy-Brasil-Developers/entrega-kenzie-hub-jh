import {HeaderStyle} from "./HeaderStyle"

export const Header = ({setUser}) => {

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