import react,{useState} from 'react'

function UpdateObject_demo(){
    const [vehicleDetails,setState]=useState(
                                    {state:'MH',
                                     initals:'ABC',
                                     reg_no:1234
                                    });
    function updateState(event){
        setState(v=>({...v,state:event.target.value}));
    }
    function updateInitial(event){
        setState(v=>({...v,initals:event.target.value}));
    }
    function updateReg(event){
        setState(v=>({...v,reg_no:event.target.value}));
    }


    return(<div>
        <p>Vehicle plate:{vehicleDetails.state} {vehicleDetails.initals} {vehicleDetails.reg_no}</p>
        <input type='text' value={vehicleDetails.state} onChange={updateState}></input>
        <input type='text' value={vehicleDetails.initals} onChange={updateInitial}></input>
        <input type='text'value={vehicleDetails.reg_no} onChange={updateReg}></input>
        
           </div>);

}

export default UpdateObject_demo