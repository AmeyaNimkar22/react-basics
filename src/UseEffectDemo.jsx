
//useEffect() tell react to perform a task if a certain thing has happened 

//useEffect(updateTitle):This means that every time the component updates (due to state changes, prop changes, or re-renders), the effect will run again.
//useEffect(updateTitle, []):Therefore, the updateTitle function will only run once after the initial render (when the component mounts) and will not re-run on subsequent renders or updates.
//useEffect(updateTitle, [count]): updateTitle function will run after the initial render and whenever the value of count changes between renders. If count does not change, the effect will be skipped.




import React,{useState,useEffect} from 'react';

function UseEffectDemo(){

   const [count,setCount]=useState(0);

   useEffect(updateTitle,[count]);

   function updateTitle(){
    document.title=`Count: ${count}`;

   }

    function handleCount(event){
        setCount(c=>(c+1));

    }


    return(
        <div>
            <p>Count:{count} </p>
            <button onClick={handleCount}>Add</button>
        </div>

    );

}

export default UseEffectDemo