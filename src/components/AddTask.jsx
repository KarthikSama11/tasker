import {useState} from 'react'

const AddTask = ({addNewTask}) => {
  const [text,setText] = useState('')
  const [reminder,setReminder] = useState(false)
  
  function onSubmit(e){
    e.preventDefault()

    if(!text){
      alert('Add a Task');
      return;
    }
    addNewTask(text,reminder)
    console.log('form submitted');
    setText("");
    setReminder(false);
  }
  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className="form-control">
        <label >Task</label>
        <input type="text" placeholder='Add a Task' value={text} onChange={(e)=>setText(e.target.value)}/>
      </div>
      <div className="form-control form-control-check">
        <label >Set Reminder</label>
        <input type="checkbox"
        checked={reminder}
        value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)} />
      </div>
      <input type="submit" value='Save Task'  className='btn btn-block'/>
    </form>
  )
}

export default AddTask
