import {FaTimes} from 'react-icons/fa'
const TaskItem = ({task,onDelete,onToggle}) => {
  return (
    <>
      <div className={`task ${task.reminder ?'reminder':""}`} onDoubleClick={()=>onToggle(task.id)} >
        <h4 >{task.text}</h4>
        <FaTimes style={{color:"red",cursor:'pointer'}} onClick={()=>onDelete(task.id)} />
      </div>
    </>
  )
}

export default TaskItem
