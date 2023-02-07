import styled from "styled-components"

export const StyleCadastro = styled.main`

    display: flex;
    flex-direction: column;
    margin-top: 10px;
    gap: 20px;


    > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: content-box;
        width: 100%;
        max-width: 369px;
        margin: 0 auto;
        margin-top: 50px;

        h1{
            text-align: center;
            
            font-size: 25px;
            color:  var(--color-1);
        }

        a{
            color: white;
            padding: 10px;
            background-color: var(--color-grey-2);
            border-radius: var(--radius-1);
            font-size: var(--font-title);
            box-sizing: content-box;
        }

    }

  

    form{
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        gap: 20px;

        width: 100vw;
        max-width: 369px;

        height: 100%;
    
        margin: 20px auto;
        border-radius: var(--radius-1);

        box-sizing: border-box;
        padding: 25px;

        background-color: var(--color-grey-2);

        h2{
            font-size: var(--font-title);
            align-self: center;
            color: var(--color-grey-5);
        }

        span , label{
            font-size: var(--font-text);
        }

        label{
            color: var(--color-grey-4);
        }

        span{
            
            align-self: center;
            color: var(--color-grey-4);
           
        }

        input{
            padding: 13px;
            font-size: var(--font-title);
            border-radius: var(--radius-1);
            border: none;
        }

        button , a{
            padding: 13px ;
            text-align: center;
            border-radius: var(--radius-1);
            opacity: 80%;
        }

        button:hover , a:hover{
          opacity: 100%;
        }

        button{
            background-color: var(--color-1);
            color: var(--color-grey-5);
            border: solid 2px var(--color-1);

        }

        a{
            background-color: var(--color-grey-4);
            color: var(--color-grey-5) ;
            font-size: var(--font-title);
        }

    }


`
