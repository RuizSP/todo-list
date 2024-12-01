import { useEffect, useState } from "react";
import { getCookie, setCookie } from 'typescript-cookie'

import { Header } from "../styledComponents/Header.styles";
import logo from "../assets/logo.svg";
import { TaskInput } from "../components/TaskInput";
import { StyledWrapper } from "../styledComponents/StyledWrapper.styles";
import { StatsContainer, StatItem } from "../styledComponents/Statistics.styles"; // Importando os novos componentes estilizados
import { EmptyAlert } from "../components/EmptyAlert";
import { ITask } from "../interfaces/ITask";
import { TaskList } from "../components/TaskList";


export function Home() {
  
  const [tasks, setTasks] = useState<ITask[]>([]);
  const finishedTasks = tasks.filter((task) => task.isFinished)
  const unfinishedTasks = tasks.filter((task) => !task.isFinished)
  //const orderedUnfinishedTasks = unfinishedTasks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  //const orderedFinishedTasks = finishedTasks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    useEffect(()=>{
        const savedTasks = getCookie('tasksCookie');
        if(savedTasks)
            {
                try{
                    const parsedTasks = JSON.parse(savedTasks) as ITask[];
                    setTasks(parsedTasks);
                }catch(err)
                {
                    console.error("Erro ao parsear o cookie");
                }
            }
    }, []);

    useEffect(()=>{
        if(tasks.length > 0)
        {
            setCookie('tasksCookie', JSON.stringify(tasks), {expires:7});   
        }
    }, [tasks])


  function addTask(taskDescription:string)
  {
    const newTask:ITask = {
        id: tasks.length + 1,
        taskDescription:taskDescription,
        isFinished: false,
        date:new Date(Date.now()),
    }

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
  }

  function removeTask(id:number)
  {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
  }

  function toggleTaskFinishedStatus(task:ITask)
  {
    const updatedTask = {...task, isFinished:!task.isFinished};
    console.log(updatedTask);
    const updatedTasks = tasks.map(t =>t = t.id ===updatedTask.id?updatedTask:t);    
    setTasks(updatedTasks);
  }
  
    return (
    <>
      <Header>
        <img className="logo" src={logo} alt="logo" />
        <h1>
          <span className="first-half">to</span>
          <span className="second-half">do</span>
        </h1>
      </Header>
      <main>
        <TaskInput addTask={addTask}/>
        <StyledWrapper margintop="4rem">
          <StatsContainer>
            <StatItem type="created">
              Tarefas criadas
              <span>{tasks.length}</span>
            </StatItem>
            <StatItem type="completed">
                Concluídas
                {
                    tasks.length <= 0
                    ?
                        <span>0</span>
                    :
                        <span>{finishedTasks.length} de {tasks.length}</span>
                }
            </StatItem>
          </StatsContainer>        
        </StyledWrapper>
        <StyledWrapper>
            {
                tasks.length === 0
                ?
                    <EmptyAlert/>
                :
                <ul>
                     <TaskList tasks={unfinishedTasks} removeTask={removeTask} toggleTaskStatus={toggleTaskFinishedStatus}/>
                     <TaskList tasks={finishedTasks} removeTask={removeTask} toggleTaskStatus={toggleTaskFinishedStatus}/>
                </ul>
               
               
            }
          
        </StyledWrapper>
       
      </main>
    </>
  );
}
