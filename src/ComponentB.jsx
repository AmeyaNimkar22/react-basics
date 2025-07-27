import { useContext} from "react";
import { NameContext } from "./UseContextDemo";

function ComponentB(){
    const name=useContext(NameContext);

    return(
        
        <div className="boxuseContext">
            <h1>See you later {name}</h1>
            
        
        </div>
    );


}

export default ComponentB;