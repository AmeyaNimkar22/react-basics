import { useContext} from "react";
import { NameContext } from "./UseContextDemo";
import ComponentB from "./ComponentB";

function ComponentA(){
    const name=useContext(NameContext);

    return(
        
        <div className="boxuseContext">
            <h1>Whats up?</h1>
            <p>Bye {name}!</p>
            <ComponentB/>

        
        </div>
    );


}

export default ComponentA;