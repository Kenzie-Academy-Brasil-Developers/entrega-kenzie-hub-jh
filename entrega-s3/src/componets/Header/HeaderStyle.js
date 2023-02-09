import styled from "styled-components";

export const HeaderStyle = styled.header`

    border-bottom: 1px solid var(--color-grey-2);

    div{
        display: flex;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        padding: 30px;
        align-items: center;

        h1{
            color: var(--color-1);
            font-size: 1.5em;

        }
        button{
            display: block;
            width: max-content;
            height: max-content;
            background-color: var(--color-grey-2);
            color: var(--color-grey-5);
            border: solid var(--color-grey-2);
            padding: 5px 10px;
            border-radius: 6px;
        }
    }    



`