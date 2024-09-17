import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

it("renders without crashing",function(){
    render(<TodoList/>)
});

it("works with snapshot",function(){
    const {asFragment}=render(<TodoList/>)
    expect(asFragment()).toMatchSnapshot();
})

it("should add a new todo with heigth and width",function(){
    const { queryByText, getByLabelText } = render(<TodoList />);
    const taskInput = getByLabelText("task");
    
    const btn = queryByText("Add Todo");
    
    expect(queryByText('red')).not.toBeInTheDocument();
    fireEvent.change(taskInput, { target: { value: 'Fix car' } });
    
  fireEvent.click(btn);
  expect(queryByText('Fix car')).toBeInTheDocument();

})