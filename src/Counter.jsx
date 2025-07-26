import { useState } from "react";

function Counter(){
    
    const [number,setCount]=useState(0);
    const increase=()=>{
        setCount(number+1);
    };
    const decrease=()=>{
        setCount(number-1);
    };
    const setBack=()=>{
        setCount(0);
    };
    return(
        <div>
            <p>{number}</p>
            <button onClick={increase}>Increment</button>
            <button onClick={decrease}>Decrement</button>
            <button onClick={setBack}>Reset</button>
        </div>
    );

}
export default Counter