import styled from "styled-components";

const StyleButton=styled.button`
   background-color: ${function(props){
       return props.theme.secondaryClr
   }} !important;
   
   display:${props=>props.display};
   margin:${props=>props.margin};
   padding:0.5em 1em;
   font-size:${props=>props.fontSize};
   width:${props=>props.width};
   border:none;
   font-family:var(--ff-secondary);
   color:#fff;
   cursor:pointer;
   transistion:all 250ms ease-in;
   outline:1px solid ${({theme})=>theme.secondaryClr};
   &:hover{
    opacity:0.8
   }
   flex-grow:0 !important;

  `
StyleButton.defaultProps={
    display:'block',
    fontSize:'1.1rem',
    width:'100%',
    margin:0
}
export default StyleButton;
