import { useState,useEffect } from 'react'
export function InputForm() {
    const [count,setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`
      })

    return(
        <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setCount(count - 1)}>Click me</button>
      </div>
    )
}