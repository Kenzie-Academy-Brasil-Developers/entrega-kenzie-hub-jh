import { createContext, useState } from "react";


export const ModalAddTechContext = createContext({})

export const ModalAddTechProvider = ({children}) => {

    const [modalCriationTech , setModalCriationTech] = useState(false)

    const renderModalCreation = () => {
          
        setModalCriationTech(!modalCriationTech)
    
    }


    return(

        <ModalAddTechContext.Provider value={{modalCriationTech , setModalCriationTech , renderModalCreation}}>
            {children}
        </ModalAddTechContext.Provider>

    )

}