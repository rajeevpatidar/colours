import React, { useEffect, useState } from "react";
// import rgbToHex from "./utils";
import "./SingleColor.css"

const SingleColor=({rgb,weight,index,hexColor})=>{
    const [alert,setAlert] = useState(false);
    const rbg= rgb.join(",");
    const hexValue = `#${hexColor}`
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false);
            return ()=>clearTimeout(timeout);
        },3000)
    },[alert]);
    // const hex = rgbToHex(...rgb);
    return <article className={`color-dis ${index>7 && "color-light"} `} style={{backgroundColor:`rgb(${rbg})`}}
        onDoubleClick={()=>{
            setAlert(true)
            navigator.clipboard.writeText(hexValue);
        }}
    >
                <p className="color-weight">{weight}%</p>
                <p className="color-name">
                    {hexValue}
                    </p>
                    {alert && <small>Copy to ClipBorad</small>}
        </article>
}
export default SingleColor