import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

it("renders without crashing",function(){
    render(<BoxList/>)
});

it("works with snapshot",function(){
    const {asFragment}=render(<BoxList/>)
    expect(asFragment()).toMatchSnapshot();
})

it("should add a new box with heigth and width",function(){
    const { queryByText, getByLabelText } = render(<BoxList />);
    const colorInput = getByLabelText("color");
    const heightInput = getByLabelText("height");
    const widthInput = getByLabelText("width");
    const btn = queryByText("Add Box");
    
    expect(queryByText('red')).not.toBeInTheDocument();
    fireEvent.change(colorInput, { target: { value: 'red' } });
    fireEvent.change(widthInput, { target: { value: '100px' } });
    fireEvent.change(heightInput, { target: { value: '100px' } });
  fireEvent.click(btn);
  expect(queryByText('red')).toBeInTheDocument();

})