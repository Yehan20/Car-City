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
   h3{
      font-size:4rem;
      margin:0;
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

