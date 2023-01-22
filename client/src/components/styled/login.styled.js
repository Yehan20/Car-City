import styled from "styled-components"

export const LoginMain = styled.div`
   background-color:${props=>props.theme.background};
   font-family:var(--ff-secondary);
   min-height:100vh;
   margin:0;
   padding:10em 1em;
   display:flex;
   flex-direction:column;


`

export const LoginStyled= styled.div`
  max-width:550px;
  width:100%;
  padding:1em;
  box-shadow:${(props)=>props.theme.cstBoxShadow};
  background-color:${({theme})=>theme.cardClr};
  margin:auto auto;
  div{
    margin-bottom:1em;
  }

  h2{
    text-align:center;
    text-transform:uppercase;
  }
  label{
    display:block;
    font-weight:600;
    text-transform:uppercase;
    letterspacing:1px;
  }
  input[type=text], input[type=password]{
    padding:0.5em 1em 0.4em 0;
    border:none;
    border-bottom:3px solid ${({theme})=>theme.secondaryClr};
    border-radius:0.1em;
    font-family:var(--ff-main);
    width:100%;
    font-size:1.1rem;
    margin-bottom:1.1em;
    &:focus{
        outline:none;
        border-bottom:3px solid green;
    }
  }
`