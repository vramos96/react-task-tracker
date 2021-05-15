import { useState } from "react";
const AddTask = ({ onAdd }) => {
    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
    const onSumbit = (e) => {
        e.preventDefault()
        if(!text){
            alert("Please add a text for the new task")
            return
        }
        //Add the new task
        onAdd({text, day, reminder})
        //Clear values after sumbit
        setText("")
        setDay("")
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSumbit}>
            <div className="form-control">
                <label>Task Text</label>
                <input type="text" 
                placeholder="Add Task Text" 
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Task Day And Time</label>
                <input type="text" 
                placeholder="Add Task Day And Time" 
                value={day}
                onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label>Task Reminder</label>
                <input type="checkbox" 
                value={reminder} 
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
