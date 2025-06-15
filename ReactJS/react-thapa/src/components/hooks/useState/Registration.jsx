import { useState } from 'react';
import './index.css'

//!not a better way (instead use format of RegistrationReact.jsx)
export const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const handleInputChange = (e) => {
        //!always give name to input field so that it can be easily identified by event object
        const {name, value} = e.target;

        switch(name){
            case "firstName" :
                setFirstName(value)
                break;

            case "lastName" :
                setLastName(value)
                break;
            
            case "email" :
                setEmail(value)
                break;

            case "password" :
                setPassword(value)
                break;
            
            case "phone" :
                setPhoneNumber(value)
                break;
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const formData = {firstName, lastName, password, phoneNumber, email}
        console.log(formData);
    }

    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <div className="container">
                    <h1>Signup</h1>
                    <p>Please Fill in the form to create an account</p>
                

                    <label htmlFor='firstName'>
                        <b>First Name</b>
                    </label>
                    <input 
                        type="text"
                        name='firstName'
                        placeholder='Enter first name'
                        required
                        autoComplete='off' 
                        value={firstName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor='lastName'>
                        <b>Last Name</b>
                    </label>
                    <input 
                        type="text"
                        name='lastName'
                        placeholder='Enter last name'
                        required
                        autoComplete='off' 
                        value={lastName}
                        onChange={handleInputChange}
                    />

                    <label htmlFor='email'>
                        <b>Email</b>
                    </label>
                    <input 
                        type="text"
                        name='email'
                        placeholder='Enter email'
                        required
                        autoComplete='off' 
                        value={email}
                        onChange={handleInputChange}
                    />

                    <label htmlFor='password'>
                        <b>Password</b>
                    </label>
                    <input 
                        type="password"
                        name='password'
                        placeholder='Enter password'
                        required
                        autoComplete='off' 
                        value={password}
                        onChange={handleInputChange}
                    />

                    <label htmlFor='phone'>
                        <b>Phone Number</b>
                    </label>
                    <input 
                        type="phone"
                        name='phone'
                        placeholder='8235110951'
                        required
                        autoComplete='off' 
                        value={phoneNumber}
                        onChange={handleInputChange}
                    />

                    <p>
                        By creating an account you agree to our &nbsp;
                        <a href="#" style={{color : "dodgerblue"}}>
                            Terms & privacy
                        </a>
                    </p>

                    <div className="clearfix">
                        <button type="submit" className="btn">Sign Up</button>
                    </div>
                </div>
            </form>

            <section
                className="summary"
                style={{ textAlign: "center", marginTop: "30px" }}
            >
                <p>
                Hello, my name is
                <span>
                    {firstName} {lastName}
                </span>
                . My email address is <span>{email}</span> and my phone number is
                <span>{phoneNumber}</span>.
                </p>
            </section>
        </>
    )
}