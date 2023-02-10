import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`


@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

body{
  font-family: 'Poppins', sans-serif;
  background-color:  #121214;
  height: 100vh;
  width: 100vw;

  box-sizing: border-box;
  

  display: flex;
  flex-direction: column;
  
 
}

:root {

  --color-1: #FF577F;
  --color-2: #FF427F;
  --color-3: #59323F;

  --color-grey-1: #121214;
  --color-grey-2: #212529;
  --color-grey-3: #343B41;
  --color-grey-4: #868E96;
  --color-grey-5: #F8F9FA;
 

  --font-title: 16px;
  --font-text: 12px;

  --font-weight-1: 600;
  --font-weight-2: 400;

  --radius-1: 4px;
  --radius-2: 8px;

  --gap-4: 20px;
  --gap-5: 10px;

}

img {
  max-width: 100%;
}

ul{
  list-style: none;
}

dialog{
  border: solid 1px rgb(221, 219, 219);

}

dialog::backdrop{
  background-color: rgba(0, 0, 255, 0.11);
  
}

`

