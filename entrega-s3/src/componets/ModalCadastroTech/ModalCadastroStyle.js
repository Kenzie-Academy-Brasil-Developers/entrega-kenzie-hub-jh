import styled from "styled-components";

export const StyledModalCadastro = styled.section`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
        background-color  : rgba(0, 0, 0, 0.50);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        color: var(--color-grey-5);
        box-sizing: border-box;
        padding: 10px;


    

    >div{
        
        background-color: var(--color-grey-2);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-width: 400px;
        height: 400px;
        border-radius: 4px  ;
        box-sizing: border-box;
        
        

        div{
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            padding: 20px;
            background-color: var(--color-grey-3);
            border-radius: var(--radius-1) var(--radius-1) 0 0;
            align-items: center;

            button{

                background: none;
                border: none;
                font-size: 19px;
                color: var(--color-grey-4);

            }
        }

        form{
            box-sizing: border-box;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between ;
            height: 100%;

            > button{

                background-color: var(--color-1);
                color: var(--color-grey-5);
                padding: 13px;
                border: none;
                font-size: 16px;
                border-radius: var(--radius-1);

            }
            
        }

      

        input , select , option {

            padding: 15px;
            font-size: 16px;
            background-color: var(--color-grey-3);
            border-radius: 4px;
            border: none;
            color: var(--color-grey-);
        }
    }

    
    

`