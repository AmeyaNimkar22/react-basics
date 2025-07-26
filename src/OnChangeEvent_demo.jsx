//onChange triggers a function everytime the value of input changes 
//It deals with primarily form elements like <input>,<select>,<textarea>etc

import React,{useState} from 'react';

function OnChangeEvent_demo(){
    const [name,setName]=useState("Guest");
    const [age,setAge]=useState(18)
    const [comment,setComment]=useState("");
    const [paymentMethod,setMethod]=useState("");
    const [deliveryMethod,setDelivery]=useState("");
    function changeName(event){
        setName(event.target.value);

    }
    function changeAge(event){
        setAge(event.target.value);
    }
    function changeComment(event){
        setComment(event.target.value);
    }
    function optionSelector(event){
        setMethod(event.target.value);

    }
    function selectDelivery(event){
        setDelivery(event.target.value);

    }
    return(
    <div>
        <input type="text" value={name} onChange={changeName}></input>
        <p>Name:{name}</p>
        <input type="number" value={age} onChange={changeAge}></input>
        <p>Age:{age}</p>
        <textarea value={comment} onChange={changeComment} placeholder='Enter comment'></textarea>
        <p>Comment:{comment}</p>
        <select onChange={optionSelector} >
            <option value="">Choose payment option</option>
            <option value="Credit card">Credit</option>
            <option value="UPI">UPI</option>
            <option value="Bank Transfer">Bank transfer</option>
        </select>
        <p>Payment method:{paymentMethod}</p>
        <label>
            <input type='radio' value="Pick up" 
                checked={deliveryMethod==="Pick up"} onChange={selectDelivery}></input>
            Pick up
        </label>
        <label>
            <input type='radio' value="Home delivery" 
                checked={deliveryMethod==="Home delivery"}  onChange={selectDelivery}></input>
            Home delivery
        </label>
        <p>Delivery method:{deliveryMethod}</p>


    </div>
    );

}
export default OnChangeEvent_demo