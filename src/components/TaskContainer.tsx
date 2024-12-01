import trash from "../assets/trash.svg";
import { BtnIcon } from "../styledComponents/BtnIcon.styles";
import { BtnRadio } from "../styledComponents/BtnRadio.styles";
import vector from "../assets/Vector.svg";
import {StyledWrapperFill } from "../styledComponents/StyledWrapper.styles";
import { ITask } from "../interfaces/ITask";

interface ITaskContainer{
    task: ITask;
    removeTask: (id:number)=>void;
    toggleTaskStatus: (task:ITask) => void;
}
export function TaskContainer({task, removeTask,toggleTaskStatus}:ITaskContainer)
{
    return(
        <StyledWrapperFill width={"736px"} height={"72px"} isfinished={task.isFinished.toString()}>
            <BtnRadio
                bgcolor={task.isFinished?"var(--purple)":"transparent" }
                bordercolor={task.isFinished?"var(--purple)":"var(--blue)" } 
                bgcolorhover={task.isFinished?"var(--purple)":"var(--blue)" }
                onClick={()=>toggleTaskStatus(task)}
            >
                {
                    task.isFinished?<img src={vector} alt="vector" />:<></>
                    
                }
            </BtnRadio>
            <p>{task.taskDescription}</p>
            <BtnIcon onClick={()=>removeTask(task.id)}>
                <img src={trash} alt="trash" />
            </BtnIcon>
        </StyledWrapperFill>
    )


}