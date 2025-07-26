import react,{useState} from 'react'

function UpdateArrayObj(){
    const [cars,setCars]=useState([]);
    const [curyear,setYear]=useState(new Date().getFullYear())
    const [maker,setMaker]=useState("");
    const [model,setModel]=useState("");

    function addcar(){

        const newCar={Manufacturing_year: curyear,
                      Manufacturer:maker,
                      Model_name:model
                     };
        setCars(c=>[...c,newCar]);
        setYear(new Date().getFullYear());
        setMaker("");
        setModel("");


    }

    
    function changeYear(event){
        setYear(event.target.value);
    }

    function changeMaker(event){
        setMaker(event.target.value);
    }

    function changeModel(event){
        setModel(event.target.value);
    }

    function removeCar(index){
        setCars(crs => crs.filter((c,i) => i !== index));
    }

  
    
    

    return(<div>
        <ul>
            
                {cars.map((car,index)=>
                <li key={index} onClick={() => removeCar(index)}>
                    {car.Manufacturing_year} {car.Manufacturer} {car.Model_name}
                </li>)}      
        </ul>

        <input type='number' value={curyear} placeholder='Enter car name' onChange={changeYear}/><br></br>
        <input type='text' value={maker} placeholder='Enter car maker' onChange={changeMaker}/><br></br>
        <input type='text' value={model} placeholder='Enter car model' onChange={changeModel}/><br></br>
        <button onClick={addcar}>Add car</button>

           </div>);

}

export default UpdateArrayObj