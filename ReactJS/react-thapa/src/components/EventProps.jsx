//! This is parent component
export const EventProps = () => {
    

    const handleClickEvent = (user) => {
        alert(`Hey! Welcome ${user}`);
    }

    const handleHover = () => {
        alert('Hey i am onMouseEnter Event')
    }
    const user = "Ankit"
    return (
        <>
            <WelcomeUser click={() => handleClickEvent(user)} hover={handleHover}/>
        </>
    )
}

//! This is child component
const WelcomeUser = (props) => {
    const buttonStyle = {
        height : "30px",
        width : "70px",
        backgroundColor : "wheat",
        color : "black"
    }

    const handleClick = () => {
        console.log('Welcome User');
        props.click()
    }

    return (
        <>
            <button style={buttonStyle} onClick={props.click}>Click me</button>
            <button style={buttonStyle} onMouseEnter={props.hover}>Hover me</button>
            <button style={buttonStyle} onClick={handleClick}>Hover me</button>
        </>
    )
}