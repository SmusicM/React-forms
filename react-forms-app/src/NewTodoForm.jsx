import React, { useState } from "react";

const NewTodoForm = ({addTodo}) =>{
  const INITIAL_STATE = {
    task:''
  }
  const [formData,setFormData] = useState(INITIAL_STATE);
  const handleChange = (evt) =>{
    //name and val on input
    const{name,value} = evt.target;
    setFormData(formData=>({
        ...formData,
        [name]:value
    }))
  }
 const handleSubmit = (evt) =>{
    evt.preventDefault();
    addTodo({...formData})
    setFormData(INITIAL_STATE)
 }
 return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="task">Task</label>
        <input id="task"
        type="text"
        name="task"
        placeholder="Your Task"
        value={formData.task}
        onChange={handleChange}>
        </input>

        

        <button>Add Todo</button>
    </form>
 )
}

export default NewTodoForm;