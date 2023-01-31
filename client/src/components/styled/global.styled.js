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

   #root{
      min-height:100vh;
      display:flex;
      flex-direction:column;
   }

   @keyframes hvr-buzz-out {
    10% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    20% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
    30% {
      -webkit-transform: translateX(3px) rotate(2deg);
      transform: translateX(3px) rotate(2deg);
    }
    40% {
      -webkit-transform: translateX(-3px) rotate(-2deg);
      transform: translateX(-3px) rotate(-2deg);
    }
    50% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }
    60% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }
    70% {
      -webkit-transform: translateX(2px) rotate(1deg);
      transform: translateX(2px) rotate(1deg);
    }
    80% {
      -webkit-transform: translateX(-2px) rotate(-1deg);
      transform: translateX(-2px) rotate(-1deg);
    }
    90% {
      -webkit-transform: translateX(1px) rotate(0);
      transform: translateX(1px) rotate(0);
    }
    100% {
      -webkit-transform: translateX(-1px) rotate(0);
      transform: translateX(-1px) rotate(0);
    }
  }
  .hvr-buzz-out {
    -webkit-animation-name: hvr-buzz-out;
    animation-name: hvr-buzz-out;
    -webkit-animation-duration: 0.75s;
    animation-duration: 0.75s;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
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
   
   .modal-content{
    .modal-body{
      margin:0;
    }
     border-radius:0;
     font-family:var(--ff-main);
     h3{
      font-family:var(--ff-sub);
      font-weight:600;
      font-size:2rem;
     }
     div{
  
      width:100%;
   
     
    }
   label{
      display:block;
      font-weight:600;
      text-transform:uppercase;
      letterspacing:1px;
    }
    input[type=text], input[type=password],input[type=number],input[type=file],textarea{
      padding:0.5em 1em 0.4em 0.5em;
      border-radius:0.1em;
      border:1px solid #f4f4f4;
      font-family:var(--ff-main);
      width:100%;
      font-size:1.1rem;
      margin-bottom:1.1em;
    
      &:focus{
        outline:0;
      }
    
    }
   }

   .viewModel{

     .modal-dialog {
      transform: none;
      display: flex !important;
      flex-direction: column !important;
      justify-content: center !important;
      min-height: 100vh !important;
    }


    h2{
      font-family:var(--ff-sub);
      color:#fff;
      font-weight:600;
      margin:0
    }
      .modal-footer{
         border:0;
         background-color:${({theme})=>theme.background} !important;
         display:flex;
         justify-content:space-between;
      }
      p{
        font-size:0.9rem;
      }
      .modal-body{
        img{
          max-width:370px;
          height:270px;
          display:block;
          margin:0 auto;
        }
        @media screen and (max-width: 767px) {
          img{
            max-width:300px;
            height:200px;
          }

        }
      }
      h3{
        font-size:1rem;
      }
      .modal-header{
        border:0;
        background-color:${({theme})=>theme.secondaryClr} !important;
        border-radius:0;
        padding:0.3em 1em;
      }
      .btn-close{
        background:${({theme})=>theme.secondaryClr} !important;
        color:#fff;
        opacity:1;
        font-family:var(--ff-secondary);
        font-weight:600;
        &:before{
          content:'X';
          color:#fff;
          opacity:1;
          position:relative;
          top:-10px;
          font-size:1.4rem;
          
        }
      }
   }
   
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #ccc;
}

::-webkit-scrollbar-thumb {
  background-color:${({theme})=>theme.secondaryClr};
}

 `
 export default Global;