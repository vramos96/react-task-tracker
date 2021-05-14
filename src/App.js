import {useState} from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Begin the React crash course",
      day: "May 13th at 5:30pm",
      reminder: false
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
  ]);
  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
