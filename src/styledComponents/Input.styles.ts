import {styled} from "styled-components";

export const Input = styled.input`
   width: 39.875rem;
   height: 3.375rem;
   background: var(--gray-500);
   font-size:1rem;
   color: var(--gray-300);
   border-radius: 8px;
   border: 1px solid var(--gray-700);
   padding:10px;
   &&:focus{
        outline:none;
        border-color: var(--purpleDark);

   }
`;

