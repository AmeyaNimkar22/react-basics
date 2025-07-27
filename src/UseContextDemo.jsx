/**
 * UseContext():
 * It is a react hook.
 * Allows you to share value with multiple levels of components without passing props 
 * 
 * PROVIDER COMPONENT
 * 1.import {createContext} from 'react';
 * 2.export const Mycontext=createContext();
 * 3.<Mycontext.Provider vale={valueVariabletoPass}>
 *    <Child/>
 *   </Mycontext.Provider>
 * 
 * CONSUMER COMPONENT
 * 1.import React,{useContext}
 *   import {Mycontext} from './ProviderComponent;
 * 2.const value=useContext(Mycontext); 
 */

import { useState,createContext } from "react";
import ComponentA from "./ComponentA";

export const NameContext=createContext();

function UseContextDemo(){
    const [name,setName]=useState("Amy");


    


    return(
        <div className="boxuseContext">
            <h1>hello</h1>
            <p>Name:{name}</p>
            <NameContext.Provider value={name}>
                <ComponentA name={name}/>
            </NameContext.Provider>
            

        
        </div>
    );


}

export default UseContextDemo