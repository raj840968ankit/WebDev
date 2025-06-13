
export const Events = () => {
    const handleClickEvent = (eventObj) => {
        console.log(eventObj);      //it will give us a syntheticBaseEvent object but not a simple JS event object
        console.log(eventObj.target);   //this will give target tag info
        alert('Hello, I am click event')
    }
    const buttonStyle = {
        height : "30px",
        width : "70px",
        backgroundColor : "wheat",
        color : "black"
    }
    return (
        <>
            <button onClick={handleClickEvent} style={buttonStyle}>Click me</button>
            <button onClick={(event) => {
                console.log(event);
                alert('Hello, I am click event 2')
            }} style={buttonStyle}>Click me 2</button>
        </>
    )
}