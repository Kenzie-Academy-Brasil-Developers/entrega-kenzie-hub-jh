
import {UserImformations} from "./UserImformationStyled"

export const UserImformation = ({user}) => {

    if(user){

        return(

            <UserImformations>
                <div>
                    <h1>Olá , {user.name}</h1>
                    <span>{user.course_module}</span>
                </div>
            </UserImformations>

        )

    }else{

        return <> </>
        
    }

}