import { useEffect, useState } from 'react'
import './index.css'
export const ReactUseEffect = () => {
    const[count, setCount] = useState(0)

    useEffect(() => {
        console.log('Count value: ', count);
    }, [count])  //?whenever the value change in dependency array [count] then useEffect will re-render otherwise only once

    return(
        <div className="container effect-container">
            <h1>useEffect - Hook</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}