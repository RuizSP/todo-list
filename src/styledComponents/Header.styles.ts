import {styled} from "styled-components";

export const Header = styled.header`
    background: var(--gray-700);
    display:flex;
    align-items: center;
    justify-content: center;
    width:100%;
    height: 12.5rem;
    h1 {
        font-size: 2.5rem;
    }

    .first-half {
            color:var(--blue);
        }
    .second-half{
        color:var(--purple);
    
    }
    .logo{
        padding: 2px;
        margin-right: 10px;
    }
`;

