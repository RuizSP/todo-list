import {styled} from "styled-components";

export const BtnIcon = styled.button`
   background:transparent;
   border: none;
   width: fit-content;
   
   &&:hover{
      background:var(--gray-400);
      border-radius: 8px;
   }
    svg path:hover{
        fill:var(--Danger);
    }
`;

