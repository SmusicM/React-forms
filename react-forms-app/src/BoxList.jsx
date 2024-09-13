import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
const BoxList = () => {
  const INITIAL_STATE = [
    { id: uuid(), color: "green", height: "250px", width: "200px" },
  ];
  //const [boxes,setBoxes] = useState([])
  const [boxes, setBoxes] = useState(INITIAL_STATE);
  const createBox = (newBox) => {
    setBoxes((boxes) => [...boxes, { ...newBox, id: uuid() }]);
  };
  const removeBox = (boxId) =>{
     setBoxes((boxes)=>{
       return boxes.reduce((acc,box)=>{
        //boxes box has property id, so we reduce it with box as the word for each box from boxes and we can get the id frpm each
        if(box.id !== boxId){
          acc.push(box)
        }
        return acc
       },[])
     })
  }
  return (
    <div>
      <h3>Color Box Maker</h3>
      <NewBoxForm addBox={createBox} />
      <div>
        {boxes.map(({ id, color, height, width }) => (
          <Box key={id} id={id} color={color} height={height} width={width} removeBox={removeBox} />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
