import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
:root{
    --ff-main:'Poppins',sans-serif;
    --ff-sub:'Rajdhani',sans-serif;
    --ff-secondary:'Montserrat', sans-serif;
   }
   *,*::before,*::after{
     box-sizing: border-box;
   
   }
   
   body {
     margin: 0;
     min-height: 100vh;
     /* font-family: var(--ff-main); */
     background-color:${({theme})=>theme.background};

   }
   button{
    cursor:pointer
   }
   img{
    max-width:100%;
   }

   
::-webkit-scrollbar {
  width: 15px;
}

::-webkit-scrollbar-track {
  background: #ccc;
}

::-webkit-scrollbar-thumb {
  background-color:${({theme})=>theme.secondaryClr};
}

 `
 export default Global;