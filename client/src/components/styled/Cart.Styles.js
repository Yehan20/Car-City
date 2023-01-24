import styled from "styled-components";

export const CartHeaderStyled=styled.div`
      background:#fff;
      padding:1em 7em;
      font-family:var(--ff-main);
      display:flex;
      justify-content:center;
   
      align-items:center;
      div{
        flex-grow:1;
      }
  
    
      div:nth-of-type(2){
        justify-content:center;
      }
          
      div:nth-of-type(3){
        padding-left:2em;
      }
    
      input[type=text]{
        padding:0.5em 1em 0.4em 0.5em;
        outline:1px solid ${({theme})=>theme.secondaryClr};
        border:0;
        font-family:var(--ff-main);
        font-weight:400;
        border-radius:0em;
        font-family:var(--ff-main);
        max-width:400px;
        width:100%;
        
        font-size:1.1rem;
        &:focus{
            outline:1px solid ${({theme})=>theme.secondaryClr};
            border:0
        }
      }
  

      h2{
        margin:0;
        font-family:var(--ff-secondary);
        font-size:2rem;
        padding-left:2em;
        letter-spacing:2px;
        font-weight:700;
        span{
            color:${({theme})=>theme.secondaryClr};
            text-transform:uppercase;
            font-size:2.5rem;
        }
      }
      h3{
        margin:0;
        font-size:0.9rem;
        font-weight:400;
        span{
            color:${({theme})=>theme.secondaryClr};
            
        }
      }

    
`

export const CartBody=styled.div`{
    min-height:100vh;
    background-color:${props=>props.theme.background};
}`