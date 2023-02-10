
import styled from "styled-components";

export const UserImformations = styled.section`

    
    border-bottom: 1px solid var(--color-grey-2);
   
    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px 30px;


        h1{
            font-size: 1.5rem;
            color:  var(--color-grey-5);
        }

        span{
            color: var(--color-grey-4);
            font-size: 0.9rem;
        }

        @media (max-width: 600px) {
            
            flex-direction: column;
            gap: 10px;

        }
    }

`