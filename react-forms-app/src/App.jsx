import React from "react";

import BoxList from "./BoxList";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  return (
    <div className="App">
      <div className="Boxlist-cont">
        <BoxList />
      </div>
 
      <div className="TodoList-cont">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
