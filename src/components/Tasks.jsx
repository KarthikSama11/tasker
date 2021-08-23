import TaskItem from "./TaskItem"

const Tasks = ({tasks,onDelete,onToggle}) => {
  return (
    <>
    {
      tasks.map((task,index)=>{ 
        return(
        <TaskItem key={index*Math.random()} task={task} onDelete={onDelete} onToggle={onToggle}/>
        )}
      )
    }
    </>
  )
}

export default Tasks
