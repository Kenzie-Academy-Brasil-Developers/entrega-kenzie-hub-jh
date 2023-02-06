import styled from "styled-components"

export const StyleLogin = styled.main`

    margin-top: 100px;
    height: 100%;

    h1{
        text-align: center;
        margin-bottom: 50px;
        font-size: 25px;
        color:  var(--color-1);
        
    }

    form{
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        gap: 25px;

        width: 100vw;
        max-width: 369px;

        height: 100%;
        max-height: 502px;
        margin: 0 auto;
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

