import styled from "styled-components";

interface BtnRadioProps{
    bgcolor: string;
    bordercolor: string;
    bgcolorhover:string;
}

export const BtnRadio = styled.button<BtnRadioProps>`
    width: 24px;
    height: 24px;
    border: 2px solid ${(props)=>props.bordercolor};
    background: ${(props)=>props.bgcolor};
    border-radius: 100%; 
    cursor:pointer;
    &&:hover{
        background: ${(props)=>props.bgcolorhover};
    
    }
`