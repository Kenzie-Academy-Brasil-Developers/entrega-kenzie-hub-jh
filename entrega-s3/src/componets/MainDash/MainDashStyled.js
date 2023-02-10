import styled from "styled-components";

export const StyledMainDash = styled.div`

  color :var(--color-grey-5) ;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
  gap: 20px ;
  

  @media (max-width: 600px) {
    padding: 10px;

    h1{
        font-size: 14px ;
    }
    p{
        font-size: 12px;
        
    }

  }

`