import Clipboard from "../assets/Clipboard.svg";
import { StyledWrapperColumn } from "../styledComponents/StyledWrapper.styles";

export function EmptyAlert()
{
    return(
        <StyledWrapperColumn width="48%" style={{ borderRadius:"8px", borderTop:"1px solid var(--gray-300)"}}>
                <br />
                <img src={Clipboard} alt="clipboard" />
                <br/>
                <strong>
                Você ainda não tem tarefas cadastradas
                </strong>
                <small>
                Crie tarefas e organize seus itens a fazer
                </small>
        </StyledWrapperColumn>
    )

}