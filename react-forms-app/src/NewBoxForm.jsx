import React, { useState } from "react";

const NewBoxForm = ({addBox}) =>{
  const INITIAL_STATE = {
    color:'',
    height:'',
    width:''
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
    addBox({...formData})
    setFormData(INITIAL_STATE)
 }
 return(
    <form onSubmit={handleSubmit}>
        <label htmlFor="color">Color</label>
        <input id="color"
        type="text"
        name="color"
        placeholder="Your color"
        value={formData.color}
        onChange={handleChange}>
        </input>

        <label htmlFor="height">Height </label>
        <input id="height"
        type="text"
        name="height"
        placeholder="Height- ex: 100px"
        value={formData.height}
        onChange={handleChange}>
        </input>

        <label htmlFor="width">Width</label>
        <input id="width"
        type="text"
        name="width"
        placeholder="Width - ex: 100px"
        value={formData.width}
        onChange={handleChange}>

        </input>

        <button>Add Box</button>
    </form>
 )
}

export default NewBoxForm;