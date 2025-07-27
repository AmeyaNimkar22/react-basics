/**
 * UseRef(): Does not Re-renders the component when state value changes
 * 
 *Applications - 1.Accessing with DOM elements 2.Handling focus,animations and transitions
                 3.Managing timers and intervals
 */

import { useState,useRef,useEffect } from "react";

function UseRefDemo(){

    let[number,setNumber]=useState(0);

    useEffect(()=>{console.log("COMPONENT RENDERED")});

    function handleClick(){
        setNumber(n=>n+1);
    }
    

    return(
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}

export default UseRefDemo;