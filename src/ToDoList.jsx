import react,{ useState } from "react";

function ToDoList(){
    const [tasks,handleTask]=useState([]);
    const [finishedTasks,handleFinishedTask]=useState([]);

    function addTask(){
        const newTask=document.getElementById("task-input").value;
        document.getElementById("task-input").value="";
        handleTask(t=>[...t,newTask]);

    }

    function doneTask(index){
        const completedTask=tasks[index];
        handleTask(tasks.filter((t,i)=>i!==index));
        displayFinished(completedTask);
    }

    function displayFinished(a){
        handleFinishedTask(f=>[...f,a]);
    }

    function showFinishedTasks(){
        const status=document.getElementById("TaskList").style.display;
        if(status==="none"){
            document.getElementById("TaskList").style.display="block";

        }
        else{
            document.getElementById("TaskList").style.display="none";

        }
    }

    
    
    return(
        <div id="container-todo">
            <h2>To-Do List</h2>
            <input type="text" placeholder="Enter your task"  id="task-input"></input>
            <div>
                <button id="add" onClick={addTask}>Add</button>
                <button id="complete" onClick={showFinishedTasks}>Completed Tasks</button>
            </div>
            <div id="TaskList" style={{display:"none"}}>
                {finishedTasks.map((ft,index)=>
                 <div key={index}>
                    <p>
                        {ft}
                    </p> 
                    
                 </div>

                )}

            </div>
            <div id="todolist">
                {tasks.map((task,index)=>
                 <div key={index}>
                    <div id="todo-ele">{task}
                        <button id="done" onClick={()=>doneTask(index)}>Done</button>
                    </div> 
                    
                 </div>

                )}

            </div>
        </div>
    );

}
export default ToDoList