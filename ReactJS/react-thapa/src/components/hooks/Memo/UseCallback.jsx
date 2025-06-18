import {memo, useCallback, useState} from 'react'

const Button = memo(({onClick, children}) => {
    console.log(`Rerendering Button : ${children}`);
    
    return (
        <button onClick={onClick}>{children}</button>
    )
})

export const UseCallback = () => {
    const [count, setCount] = useState(0)

    // const increment = () => {
    //     setCount((prev) => prev + 1)
    // }

    // const decrement = () => {
    //     setCount((prev) => prev - 1)
    // }

    const increment = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    const decrement = useCallback(() => {
        setCount((prev) => prev - 1)
    }, [])

    return (
        <div>
            <h1>Count : {count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
        </div>
    )
}