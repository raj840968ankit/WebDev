import { useState } from 'react';
import './index.css'

export const RegistrationReact = () => {
    const [user, setUser] = useState({
        firstName : "",
        lastName : "",
        email : "",
        password : "",
        phoneNumber : "",
    });

    
    const handleInputChange = (e) => {
        //!always give name to input field so that it can be easily identified by event object
        const {name, value} = e.target;

        setUser((prev) => ({...prev, [name] : value}))
    };

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setUser({
            firstName : "",
            lastName : "",
            email : "",
            password : "",
            phoneNumber : "",
        })
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
                        value={user.firstName}
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
                        value={user.lastName}
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
                        value={user.email}
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
                        value={user.password}
                        onChange={handleInputChange}
                    />

                    <label htmlFor='phoneNumber'>
                        <b>Phone Number</b>
                    </label>
                    <input 
                        type="phone"
                        name='phoneNumber'
                        placeholder='8235110951'
                        required
                        autoComplete='off' 
                        value={user.phoneNumber}
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
                    {user.firstName} {user.lastName}
                </span>
                . My email address is <span>{user.email}</span> and my phone number is
                <span>{user.phoneNumber}</span>.
                </p>
            </section>
        </>
    )
}