import styled from "styled-components";
import img from '../../imgs/car.png'
export const CartHeaderStyled=styled.div`
      background:#fff;
      padding:1em 7em;
      font-family:var(--ff-main);
      display:flex;
      justify-content:center;
      position:fixed;
      width:100%;
      z-index:99;
      top:3em !important;
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
    // background-image:url(${img});
    background-repeat:no-repeat;
    background-size:200px;
    background-position:center;
    padding-top:7em;
    h1{
      text-align:center;
      font-family:var(--ff-main);
    }
    h3{
      font-size:1.2rem;
      text-align:center;
      word-break: break-all;
      font-family:var(--ff-sub);
      font-weight:600;
   }
   div{
      padding:1em 1em;
      gap:2em;
      justify-content:center;
      align-content:flex-start;
      flex-wrap:wrap;
   }
   article{
      transition:all 250ms ease-in;
      max-width:232px;
      width:100%;
      // box-shadow:${({theme})=>theme.cstBoxShadow};
      padding:2em;
      background-color:#fff;
      display:flex;
      flex-direction:column;
      align-items:center;
      gap:0.5em;
      font-family:var(--ff-main);
      cursor:pointer;
      
      p{
        margin:0;
      }
   
      &:hover{
         box-shadow:${({theme})=>theme.cstBoxShadow};
      }
      &:hover img{
         transform:scale(1.05);
      }
      div{
         padding:0;
         display:flex;
         gap:1em;
         justify-content:center!important;
         button{
            background:transparent !important;
            outline:0 !important;
         }
         
      }
      img{
         height:150px;
         max-width:200px;
         transition:all 250ms ease-in;
      }
      h4{
        font-size:1.1rem;
      }
      h4 span{
       
       color:${({theme})=>theme.secondaryClr};
      }
      div{
      
      }
      h5{
        
        background-color:#fff;
        outline:1px solid #f4f4f4;
        padding:0.5em;
        margin:0;
  
      }
      button{
        padding:0.2em !important;
        border-radius:0.1em !important;
      }
}`
