import styled from 'styled-components'


export const Container = styled.div`
   max-width:1140px;
   width:100%;
   margin:1em auto;
   padding:1em;
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
export const StyledError=styled.div`
   padding-top:15em;
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