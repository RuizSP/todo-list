import { useState } from "react";
import plus from"../assets/plus.svg";
import { BtnPrimary } from "../styledComponents/BtnPrimary.styles";
import { Input } from "../styledComponents/Input.styles";
import { StyledContainer } from "../styledComponents/StyledContainer.styles";

interface ITaskInputProps
{
    addTask: (taskDescription:string) => void;
}

export function TaskInput({addTask}:ITaskInputProps)
{
    const [taskInputText, setTaskInputText] = useState<string>("");

    function addNewTask()
    {
        if(taskInputText !== undefined && taskInputText !=="")
        {
            addTask(taskInputText);
            reset();
        }
        
    }

    function reset()
    {
        setTaskInputText("");

    }


    return(
        <StyledContainer>
            <Input type="text" placeholder="Adicione uma nova tarefa" value={taskInputText} onChange={(e)=>{setTaskInputText(e.target.value)}}/>
            <BtnPrimary onClick={addNewTask}>
                <span>Criar</span>
                <img src={plus} alt="plus" />
            </BtnPrimary>
        </StyledContainer>

    )


}