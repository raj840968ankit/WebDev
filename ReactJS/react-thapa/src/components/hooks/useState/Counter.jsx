import { useState } from "react"

export const Counter = () => {
    const buttonStyle = {
        height : "60px",
        width : "140px",
        backgroundColor : "rgb(4, 252, 4)",
        color : "black",
        border : "2px solid rgb(4, 252, 4)",
        borderRadius : "5px",
        fontSize : "2.5rem"
    }
    // let value = 0;

    // const handleButtonClick = () => {
    //     value++;   
    //     //but the change in value doesn't reflect on page because react js doesn't reflect change of normal variable
    //     console.log(value);   //change in variable can only be seen in console.
    // }

    //!Using useState here
    const [count, setCount] = useState(0);

    const handleButtonClick = () => {
        setCount(count + 1)
    }
    return (
        <section style={{height : '100vh', width : '100%',display : "flex", flexDirection : "column",justifyContent : "center", alignItems : "center"}}>
            <h1>{count}</h1>
            <button style={buttonStyle} onClick={handleButtonClick}>Increment</button>
        </section>
    )
}