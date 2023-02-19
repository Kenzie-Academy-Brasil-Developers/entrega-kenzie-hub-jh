import styled from "styled-components";

export const StyledMainDash = styled.main`

  color :var(--color-grey-5) ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  padding: 30px;
  gap: 20px ;
  max-width: 1200px;

  .modal{
    
    position: absolute;
    justify-content: center;
    display: flex;
    width: 100vw;
    
    div{
      display: flex;
      flex-direction: column;
      gap: 10px;
      max-width: 400px;
    }
  }
  
  >div{
    box-sizing: border-box;
    align-items: center;
    display: flex;
    justify-content: space-between;

    width: 100%;

    button{
      background-color: #343B41;
      color: var(--color-grey-5);
      padding: 2px 10px;
      font-size: 30px;
      border: none;
      border-radius: 4px;
    }
  }  

  ul{
    width: 100%;
    max-width: 1200px;
    padding: 30px 40px;
    box-sizing: border-box;
    background-color: #212529;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    
   

    li{

      display: flex;
      justify-content: space-between;
      background-color: #121214;
      align-items: center;
      padding: 15px;
      border-radius: 6px;
      box-sizing: border-box;
      
      
      
      div{
        display: flex;
        align-items: center;
        gap: 10px;


        button{
          background: none;
          border: none;
          font-size: 20px;
          color: white;
        }
      }

    }
    li:hover{
      background-color: #343B41;
    }

  }
  @media (max-width: 400px) {

    padding: 10px;

     ul{
      padding: 10px;
     }

  }

`