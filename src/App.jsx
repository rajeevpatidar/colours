import React from "react";
import { useState } from "react";
import Values from "values.js"
import "./App.css"
import SingleColor from "./SingleColor";
const App=()=>{
  const [color,setColor] = useState("")
  const [error,setError] = useState(false)
  const [list,setList] = useState(new Values("#f15025").all(10));
  // if we put one inside all mtd then we get shades or base on the margin of one percent

  const handleSubmit=(e)=>{
    e.preventDefault();
    try{
      let colors = new Values(color).all(10);
      setList(colors);
    }
    catch(error){
      setError(true);
      console.log(error);
    }
  }
  const changecolorvalue=(event)=>{
    setColor(event.target.value);
  }
  return(
    <>
      <section className="container">
        <h1>
          Color generator :-
        </h1>
        <form onSubmit={handleSubmit}>
          <input type="text" value={color}
          onChange={changecolorvalue}
          placeholder="f15025"
          className={`${error? 'error':null}`} />
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color,index)=>{
          console.log(color );
          return <SingleColor key ={index} {...color} index={index} hexColor={color.hex} />
        })}
        </section>
    </>
  )
}
export default App