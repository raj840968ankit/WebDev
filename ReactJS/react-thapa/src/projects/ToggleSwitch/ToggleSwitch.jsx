import { useState } from "react"
import "./toggleSwitch.css"
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => {
    const [isOn, setIsOn] = useState(false)

    const handleSwitchClick = () => {
        setIsOn(!isOn)
    }

    const stateProperty = isOn ? "on" : "off"
    return (
        <>
            <h1>Toggle Switch <IoIosSwitch style={{color : "orange"}}/></h1>
            <div className="toggle-switch" onClick={handleSwitchClick} 
                style={{backgroundColor : isOn ? "#4caf50": ""}}>

                <div className={`switch ${stateProperty}`} >
                    <span className="switch-state">{stateProperty}</span>
                </div>
            </div>
        </>
        
    )
}