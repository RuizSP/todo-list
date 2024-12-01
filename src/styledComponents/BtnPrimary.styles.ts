import {styled} from "styled-components";

export const BtnPrimary = styled.button`
    display:flex;
    align-items: center;
    justify-content:center;
    flex-direction: row;
    background: var(--blueDark);
    border: none;
    border-radius:  8px;
    color: var(--gray-100);
    width: 5.6rem;
    height: 3.25rem;
    font-size: 14px;
    gap: 8px;
    cursor: pointer;
    transition: background 0.1s ease;

    &&:hover{
        background:var(--blue);
    
    }
`;

