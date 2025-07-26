//React hook enables special functions to use react features without using class components
//useState,useEffect,useContext,useCallback,etc
//useState()=allows creation of a stateful variable and a setter function to update its value in virtual DOM
/*
import { useState } from "react";


function Usestate_hook(){
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(0);
    const [isEmployed,setStatus]=useState(false);
    const updateName=() =>{
        setName("Amy");

    }
    const updateAge=()=>{
        setAge(age+1);
    }
    const updateEmployeeStatus=()=>{
        setStatus(!isEmployed);
    }
    return (<h1>
           <p>Name:{name}</p> 
           <button onClick={updateName}>Click here!</button>
           <p>Age:{age}</p> 
           <button onClick={updateAge}>Click here!</button>
           <p>Employability status:{isEmployed? "Yes":"No"}</p> 
           <button onClick={updateEmployeeStatus}>Click here!</button>
           </h1>);

}
export default Usestate_hook;
*/