import { useEffect, useState } from "react"

export function FormHook() {
    const [name,setName] = useState("")
    const [address,setAddress] = useState("")
    console.log("render | re-render");
    useEffect(() =>{
            console.log("use effect");
    },[name])
   
    return(
        <div>
           { console.log("return")}
            <input value={name} onChange={e => setName(e.target.value) } />
            <input value={address} onChange={e => setAddress(e.target.value) } />
        </div>
    )

}