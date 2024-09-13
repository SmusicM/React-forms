import React from "react";


const Box= ({id,color,height,width,removeBox})=>{
    //remove box at id
    const handleBoxRemove  = () =>{
        removeBox(id)
    }
return(
    <div className="Box" style={{backgroundColor:color,height:height,width:width}}>
        {color}
       <button onClick={handleBoxRemove}>X</button>
    </div>
)
}

export default Box;