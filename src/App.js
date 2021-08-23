import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
	const [showAddTask, setShowAddTask] = useState(false);
	const [allTasks, setAllTasks] = useState([]);
	if (showAddTask.length === 0) setShowAddTask(!showAddTask);
	//Add Task ::>>
	function addTask(text, reminder) {
		console.log("task-added");
		const id = allTasks.length * Math.random();
		setAllTasks([...allTasks, { id, text, reminder }]);
		// setShowAddTask(!showAddTask);
	}
	//Delete Task ::>>
	function deleteTask(id) {
		setAllTasks(allTasks.filter((item) => item.id !== id));
		// setAllTasks(allTasks.map())
		console.log("task-deleted", id);
	}
	// Toggle Reminder ::>>
	function toggleReminder(id) {
		setAllTasks(
			allTasks.map((task) =>
				task.id === id ? { ...task, reminder: !task.reminder } : task
			)
		);
		console.log("reminder-altered");
	}
	return (
		<div className="container">
			<Header
				title="Tasks"
				onAdd={() => setShowAddTask(!showAddTask)}
				showAdd={showAddTask}
			/>

			{showAddTask && <AddTask addNewTask={addTask} />}

			{allTasks.length > 0 ? (
				<Tasks
					tasks={allTasks}
					onDelete={deleteTask}
					onToggle={toggleReminder}
				/>
			) : (
				"No Tasks Yet"
			)}
		</div>
	);
}

export default App;
