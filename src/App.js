import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
function App() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Begin the React crash course",
      day: "May 13th at 5:30pm",
      reminder: true
    },
    {
      id: 2,
      text: "Commit changes to Gitlab",
      day: "May 14th at 2:30pm",
      reminder: false
    },
    {
      id: 3,
      text: "Finish the React crash course",
      day: "May 15th at 9:30pm",
      reminder: false
    }
  ])
  const addTask = (task) => {
    const id = Math.floor( Math.random() *10000 ) + 1
    const newTask = { id, ...task}
    setTasks([...tasks, newTask])
  }
  const deleteTask = (id) => {
    setTasks( tasks.filter( (task) => task.id !== id ) )
  }
  const toggleReminder = (id) => {
    setTasks( tasks.map( (task) => task.id === id ? {...task, reminder : !task.reminder} : task ) )
  }
  return (
    <div className="container">
      <Header onAdd={() => setshowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {
        showAddTask && <AddTask onAdd={addTask}/>
      }
      {
        tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        :
        <h3>There are no tasks to show</h3>
      }
    </div>
  );
}

export default App;
