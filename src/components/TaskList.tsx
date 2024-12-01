import { ITask } from "../interfaces/ITask"
import { TaskContainer } from "./TaskContainer";

interface ITaskListProps
{
    tasks:ITask[];
    removeTask:(id:number) => void;
    toggleTaskStatus:(task:ITask) => void;
}

export function TaskList({tasks, removeTask, toggleTaskStatus}:ITaskListProps)
{
    return(
        <>
            {
                tasks.map(task =>{
                    return(
                        <li  key={task.id} style={{padding:"5px", textDecoration:"none", listStyle:"none"}}>
                            <TaskContainer task={task} removeTask={removeTask} toggleTaskStatus ={toggleTaskStatus}/>
                        </li>

                    );
                })
            }
        </>
    )

} 