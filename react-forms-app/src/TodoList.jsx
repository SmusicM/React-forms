import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm";


const TodoList = () => {
  const INITIAL_STATE = [
    { id: uuid(), task: 'Clean garage'},
    { id: uuid(), task: 'Go shopping'}
  ]
  const [todos, setTodos] = useState(INITIAL_STATE);
  const addTodo = (newTodo) => {
    setTodos(todos => [...todos, { ...newTodo, id: uuid() }])
  }

  const removeTodo = (todoId) =>{
    setTodos((todos)=>{
        return todos.reduce((acc,todo)=>{
         
         if(todo.id !== todoId){
           acc.push(todo)
         }
         return acc
        },[])
      })
  }

  return (
    <div>
      <h3>Todo List</h3>
      <NewTodoForm addTodo={addTodo} />
      <div>
        {todos.map(({ id, task }) => <Todo id={id} task={task} key={id} removeTodo={removeTodo}/>)}
      </div>

    </div>
  )

}

export default TodoList;