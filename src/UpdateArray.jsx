import react,{useState} from 'react'

function UpdateArray(){
    const [fruits,handleFruits]=useState(["Apple","Mango"]);
    function addFruits(){
        const newFruit=document.getElementById('food-container').value;
        document.getElementById('food-container').value="";
        handleFruits(f=>[...f,newFruit]);
    }
    function removeFruits(index){
        handleFruits(fruits.filter((f,i)=> i!==index));

    }


    return(<div>
           <ul>
            {fruits.map(
                (fruit,index)=>
                <li key={index} onClick={
                                         ()=>removeFruits(index)}>
                                         {fruit}</li>
            )}
           </ul>
           <input type="text" id="food-container" 
            placeholder='Enter fruit name'/>
           <button onClick={addFruits}>Enter</button>

           </div>);
}

export default UpdateArray