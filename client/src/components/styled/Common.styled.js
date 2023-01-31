import styled from 'styled-components'
import car from '../../imgs/car.png'

export const Container = styled.div`
   max-width:1140px;
   width:100%;
   margin:1em auto;
   padding:1em;
   @media (min-width: 1600px) {
      max-width:1500px;
    }

`
export const Split = styled.div`
  display:flex;
//   flex-wrap:wrap;
  button{
   background:transparent;
   border:0;
   flex-grow:1;
 }
 gap:10px;
  
`
export const StyleSuccess = styled.div`
display:flex;
justify-content:center;
flex-direction:column;
align-items:center;
justify-content:space-evenly;
background-image:url('https://media.tenor.com/-SxWP-6u-hEAAAAC/snow-fall.gif');
opacity:0.8;
h3{
   font-size:1.8rem;
   font-family:var(--ff-sub);
   margin:0;
   font-weight:600;
}
p{
   margin:0;
}
@media (max-width:340px){
   h3{
      font-size:1.1rem;
   
   }
        
  p{
   font-size:0.8rem;
  }
 }
`
export const Empty = styled.div`
   height:200px;
   display:flex;
   justify-content:center;
   align-items:flex-end;
   background-image:url(${car}) !important;
   background-size:150px;
   opacity:0.8;

   @media (min-width: 1600px) { 
      h3{
         padding-bottom:0 !important;
      }
   }
  
   background-repeat:no-repeat;
   background-position:center center;
   h3{
      padding-bottom:0em;
      color:#ccc;
      font-weight:600;
      font-size:2rem;
      font-family:var(--ff-secondary);
      // text-transform:uppercase;
   }
   @media screen and (max-width: 767px) {
       h3{
         font-size:1.1rem;
       }
   }

   
`
export const NotFoundStyle=styled.div`
    display:flex;
    flex-wrap:nowrap !important;
    flex-direction:column !important;
    background-image:url(${car});
    background-repeat:no-repeat;
    background-size:500px;
    background-position:center top;
    text-align:center;
   
    align-items:center!important;
    padding:4em 3em 14em 3em !important;
    h3{
      font-size:3rem;
    }
    @media screen and (max-width: 767px) {
      background-size:200px;
      background-position:center bottom;
      h3{
         font-size:2rem;
       }
    }

`

export const StyledError=styled.div`
   padding-top:8em;
   text-align:center;
   font-family:var(--ff-sub);
   color:${({theme})=>theme.secondaryClr};
   h3{
      font-size:4rem;
      margin:0;
    
   }
   p{
      font-size:2rem;
      margin:0 0 1em 0;
      font-weight:700;
   }
   a{
      text-decoration:none;
      color:${({theme})=>theme.secondaryClr};
   }
`

export const StyledHeader = styled.header`
  background-color:${({theme})=>theme.secondaryClr};
  position:fixed;
  z-index:99;
  left:0;
  top:0;
  width:100%;
  padding:0.5em 0  0 0;
  h1{
   margin:0;
   font-family:var(--ff-sub);
   color:#fff;
   text-transform:uppercase;
   text-align:center;
   display:flex;
   align-items:center;
   justify-content:center;
   gap:0.5em;

   svg{
      font-size:36px;
     }

  }


`
export const StyledFooter = styled.footer`
  margin-top:auto;
  text-align:center;
  padding:1em;
  background-color:#fff;
  font-family:var(--ff-secondary);
  font-weight:600;
  p{
   line-height:1.6;
   margin:0;
  }
  span{
   color:${({theme})=>theme.secondaryClr};
   font-weight:800;
  }

`
export const StyledAdminHome = styled.div`
   
   min-height:100vh;
   padding-top:3.5em;
   font-family:var(--ff-main);
   h2{
      text-align:center;
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
      cursor:pointer;
   
      &:hover{
         box-shadow:${({theme})=>theme.cstBoxShadow};
      }
      &:hover img{
         transform:scale(1.05);
      }
      div{
         padding:0;
         display:flex;
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
      h4 span{
       
       color:${({theme})=>theme.secondaryClr};
      }

   }

`
export const StyledAdminNav = styled.nav`
  background-color:white;
  ul{
   padding:0;
   display:flex;
   justify-content:center;
   list-style:none;
   width:100%;
   gap:1em;
  }
  padding:0.5em;
`
export const StyledAdminModel = styled.div`
  border-radius:0;
  
`