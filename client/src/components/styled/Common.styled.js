import styled from 'styled-components'


export const Container = styled.div`
   max-width:1140px;
   width:100%;
   margin:1em auto;
   padding:1em;
`
export const Split = styled.div`
  display:flex;
  button{
   background:transparent;
   border:0;
   flex-grow:1;
 }
  
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
   padding-top:7em;
   font-family:var(--ff-main);
   h2{
      text-align:center;
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