import {useState} from "react";

export default function Student(){

    const[nom, setNom]=useState("hy!")
        function greetings(name){
            setNom(name)
        }

        return(
            <>
            
                <button onClick={()=>greetings("hola!")} className="bg-blue-500 text-black rounded-lg p-1 ">CLICK</button>
                <p>{nom}</p>

            </>
        )


}