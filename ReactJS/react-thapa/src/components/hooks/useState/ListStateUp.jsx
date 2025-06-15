import { useState } from "react"

export const LiftStateUp = () => {
    const[inputValue, setInputValue] = useState("");
    return (
        <>
            <InputComponent inputValue={inputValue} setInputValue={setInputValue}/>
            <DisplayComponent inputValue={inputValue}/>
        </>
    )
}

const InputComponent = ({inputValue, setInputValue}) => {
    //!now for lifting up so that this hook can be used by another child also, we need to lift this hook in parent first
    //!then we pass the value as props in both child
    // const[inputValue, setInputValue] = useState("");

    //when we use a form tag then we have to apply onChange event
    return(
        <input type="text" 
            placeholder="Enter your name" 
            value={inputValue} 
            onChange={(e) => {
                setInputValue(e.target.value)
            }}/>
    )
}

const DisplayComponent = ({inputValue}) => {
    return <p>The current input value is - {inputValue}</p>
}