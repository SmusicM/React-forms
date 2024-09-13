import React from "react";


const Todo= ({id,task,removeTodo})=>{
    //remove box at id
    const handleTodoRemove  = () =>{
        removeTodo(id)
    }
return(
    <div className="Todo">
        <ul className="Todo-ul">
        <li><p>{task}</p></li>
       <button onClick={handleTodoRemove}>X</button>
       </ul>
    </div>
)
}

export default Todo;