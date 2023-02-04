import styled from "styled-components";
import img from '../../imgs/car.png'
export const CartHeaderStyled=styled.div`
      background:#fff;
      padding:1em 7em 2em 7em;
      font-family:var(--ff-main);
      display:flex;
      justify-content:center;
      position:fixed;
      width:100%;
      z-index:99;
      top:3.5em !important;
      align-items:center;

      @media (min-width: 992px) and (max-width: 1199px) {
        top:3em;
        padding:1em 2em 2em 2em;
        button {
          span{
            right:45px !important;
          }
          @supports (-moz-appearance:none) {
            span {    right:2vh !important;} 

            }

        }

      }
      @media (min-width: 768px) and (max-width: 992px) {
        top:3em !important;
        padding:1em 1em 2em 1em;
        h2{
          padding:0 !important; 
        }
        input[type="text"]{
          max-width:280px !important;
        }
        div{
          padding-left:0 !important;
        }

        button {
          span{
            right:35px !important;
          }
          @supports (-moz-appearance:none) {
            span {    right:15% !important;} 
            }

        }

      }
      @media (max-width:767px){
        padding:1em 1em 2em 1em;
        flex-direction:column;
        gap:2em;
        top:2.6em !important;
        h2{
          padding:0 !important;
          display:none !important;
        }
        input[type="text"]{
          max-width:280px !important;
        }
        div{
          padding-left:0 !important;
        }

        button {
          span{
            right:-20px !important;
          }
          @supports (-moz-appearance:none) {
            span {    right:-10px !important;} 
            }

        }

      }


      @media (min-width: 1600px) {
        padding: 1em 16em 2em 18em;
      }

      div{
        flex-grow:1;
      }
      
      button{
        position:relative;
        left:-10px;
         span{
          position:absolute;
          top:-1em; 
          right:40px;
          color:red;
          font-weight:600;
          
         }
         @supports (-moz-appearance:none) {
          span {    right:20px;} 
          }
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
    padding-top:8em;
    @media screen and (max-width: 767px) {
       padding-top:13em;
    }
    @media (min-width: 1600px) {

     }

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
      padding:2em 1em;
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
         cursor:zoom-in;
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
export const MiniCartBody = styled.div`{
  position:absolute;
  z-index:999;
  top:4em;
  right:10em; 
  // bottom:1em;  
  max-width:400px;  
  width:100%;
  padding:0 0 1em 0;
  box-shadow:${({theme})=>theme.cstBoxShadow};
  border:1px solid #ccc;
  background-color:#fff;
  height:350px;
  @media (min-width: 992px) and (max-width: 1199px) {

    right:4em !important; 
  }
  @media (min-width: 768px) and (max-width: 991px) {

    right:4em !important; 
  }
  
  @media (max-width:767px){
    top:11em !important;
    right:0 !important; 
    left:20% !important; 
    
    max-width:350px;
    button{
      width:200px !important;
    }
    div button {
      width:auto !important;
    }
  }
  @media (max-width:450px){
        
    max-width:320px;
    top:11em !important;
    right:0 !important; 
    left:5% !important; 
 
  }
  @media (max-width:340px){
        
    max-width:300px;
    top:11em !important;
    right:0 !important; 
    left:3% !important; 
 
  }

  @media (min-width:1600px){
    right:20em; 
  }

  display:flex;
  flex-direction:column;
  justify-content:space-between !important;


   button{
    padding:0.2em !important;
    text-transform:uppercase;
    font-family:var(--ff-secondary) !important;
    font-weight:600;
    margin:0 auto ;
    border-radius:0.1em;
    align-self:flex-end;
    left:0 !important;
    margin-bottom:5px;
   }

   aside{
    overflow-y:auto;
    overflow-x:hidden;
    // height:350px;
  
   }
}`
export const StyledMiniCart  = styled.div`{
   margin-bottom:auto;
   flex-grow:0 !important;
   padding:0.5em !important;
   align-self:stretch;
   margin-bottom:0.5em;
   display:flex; 
   @media (max-width:767px){
    p{
      font-size:0.8rem !important;
    }
    img{
      80px !important;
    }
 
  }
 
   &:hover{
    background-color:${({theme})=>theme.background};
   }
   gap:0.5em;
   align-items:center;
   div{
    flex-grow:0;
    padding:0 !important;
   }
   div:nth-of-type(3){
    width:20% !important;
  }
  div:nth-of-type(1){
    width:20% !important;
  }
  div:nth-of-type(4){
    width:10% !important;
  }
   div:nth-of-type(2){
     width:50% !important;
   }
   img{
    width:120px;
   }
   button{
     display:block;
     margin-left:auto;
   
   }
   p{
    margin:0;
    color:#333;
    font-size:0.9rem;
    font-family:var(--main);
    font-weight:500;
   }

}`