import  styled  from "styled-components";

export const ModalAtualizaExcluirStyled = styled.div`
     
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    background-color: rgba(0, 0, 0, 0.70) ;
    width: 100%;
    height: 100%;

    >div{
        border-radius: 4px;
        padding: 20px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 500px;
        background-color: var(--color-grey-2);
        gap: 15px;
        color: var(--color-grey-5);

        div{
            display: flex;
            justify-content: space-between;
            align-items: center;

            >button{
                background:none ;
                border: none;
                font-size: 25px;
                color: var(--color-grey-4);
            }
        }

        form{
            
            display: flex;
            flex-direction: column;
            gap: 15px;

            input ,select {
                border: none;
                border-radius: 3px;
                padding: 15px;
                font-size: 16px;
            
            }

            button{
                color: var(--color-grey-5);
                padding: 15px;
                font-size: 16px;
                border: none;
                background-color: var(--color-3);
                border-radius: 4px;
                width: 48%;
            }

            button:hover{
                background-color: var(--color-1);

            }

            button+button{
                background-color: var(--color-grey-3);
            }
            button+button:hover{
                background-color: var(--color-grey-4);
            }
        }
    }

`