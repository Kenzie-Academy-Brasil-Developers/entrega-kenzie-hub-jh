import { useEffect } from "react"
import {UserImformations} from "./UserImformationStyled"

export const UserImformation = ({user}) => {


    if(user){

        return(

            <UserImformations>
                <div>
                    <h1>Olá , {user.user.name}</h1>
                    <span>{user.user.course_module}</span>
                </div>
            </UserImformations>

        )

    }else{

        return <></>
        
    }

}