import { createContext, useState } from "react";


export const ModalAtualizaExcluirContext = createContext({})

export const ModalAtualizaExcluirProvider = ({children}) => {

    const [RenderModalAtualizaExcluir , setRenderModalAtualizaExcluir] = useState(false)

    const functionDeRenderizarModal = (tech) => {

        setRenderModalAtualizaExcluir(tech)
       
    }
   

    return(

        <ModalAtualizaExcluirContext.Provider value={{functionDeRenderizarModal ,RenderModalAtualizaExcluir , setRenderModalAtualizaExcluir }}>
            {children}
        </ModalAtualizaExcluirContext.Provider>

    )

}